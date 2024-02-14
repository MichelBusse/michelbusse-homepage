import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp",
  port: 25,
});

export async function POST(req: NextRequest, res: NextResponse) {
  let data = await req.json();
  if (!data.email || !data.text) {
    return new NextResponse("Error", { status: 500 });
  }

  const mailData = {
    from: data.email,
    to: "contact@michelbusse.dev",
    subject: `Kontaktformulat - michelbusse.dev`,
    text: data.text + "\n\nE-Mail: " + data.email,
  };

  let mailRes = await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        resolve(false);
        console.log(err);
      } else {
        resolve(true);
      }
    });
  });

  if (mailRes) {
    return new NextResponse("Success!", { status: 200 });
  } else {
    return new NextResponse("Error", { status: 500 });
  }
}
