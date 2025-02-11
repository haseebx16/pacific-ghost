import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const form = new formidable.IncomingForm();
    const [fields, files] = await form.parse(req);
    const file = files.file[0]; // Get the uploaded file

    if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'raw' },
      (error, result) => {
        if (error) return NextResponse.json({ error: error.message }, { status: 500 });

        return NextResponse.json({ url: result.secure_url }, { status: 200 });
      }
    );

    fs.createReadStream(file.filepath).pipe(uploadStream);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}