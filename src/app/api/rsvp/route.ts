import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface RsvpPayload {
  name: string;
  attendance: "attending" | "declined";
  guests: number;
  phone?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RsvpPayload = await req.json();

    const { name, attendance, guests, phone, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (attendance !== "attending" && attendance !== "declined") {
      return NextResponse.json(
        { success: false, error: "Invalid attendance status" },
        { status: 400 }
      );
    }

    const guestCount = typeof guests === "number" && guests >= 1 && guests <= 10 ? guests : 1;

    const newRecord = {
      id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      attendance,
      guests: attendance === "declined" ? 0 : guestCount,
      phone: phone ? phone.trim() : "",
      message: message ? message.trim() : "",
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "",
    };

    // Store in data/rsvps.json
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "rsvps.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let existing: typeof newRecord[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        existing = JSON.parse(fileContent);
      } catch {
        existing = [];
      }
    }

    existing.push(newRecord);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");

    // Optional webhook forwarding (e.g. Google Sheets Apps Script Webhook or Zapier)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.RSVP_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newRecord),
        });
      } catch (err) {
        console.error("Webhook forwarding failed (logged silently):", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "RSVP recorded successfully",
      recordId: newRecord.id,
      storage: "local_json_registry",
      persistedCount: existing.length,
    });
  } catch (error) {
    console.error("RSVP submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process RSVP submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Read stats safely
  try {
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "rsvps.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ totalSubmissions: 0, attendingCount: 0, guestCount: 0 });
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const list = JSON.parse(fileContent);
    const attending = list.filter((r: { attendance: string }) => r.attendance === "attending");
    const totalGuests = attending.reduce((acc: number, r: { guests: number }) => acc + (r.guests || 1), 0);

    return NextResponse.json({
      totalSubmissions: list.length,
      attendingCount: attending.length,
      declinedCount: list.length - attending.length,
      totalGuests,
    });
  } catch {
    return NextResponse.json({ totalSubmissions: 0 });
  }
}
