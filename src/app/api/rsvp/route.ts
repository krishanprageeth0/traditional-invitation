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

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    const newRecord = {
      id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      attendance: attendance || "attending",
      guests: attendance === "declined" ? 0 : (guests || 1),
      phone: phone ? phone.trim() : "",
      message: message ? message.trim() : "",
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "",
    };

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

    // Optional webhook forwarding (e.g. Google Sheets)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newRecord),
        });
      } catch (err) {
        console.error("Webhook forwarding error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "RSVP recorded successfully",
      recordId: newRecord.id,
      persistedCount: existing.length,
    });
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process RSVP" },
      { status: 500 }
    );
  }
}
