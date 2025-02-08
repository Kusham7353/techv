import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  try {
    const { name, email, password, regulatoryDocs } = await req.json();

    // Check if the company already exists
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return NextResponse.json({ error: "Company already registered" }, { status: 400 });
    }

    // Save new company
    const newCompany = new Company({ name, email, password, regulatoryDocs });
    await newCompany.save();

    return NextResponse.json({ message: "Registration successful" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
