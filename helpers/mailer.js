import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';


export const sendEmail = async({email,emailType, userId}) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(),10);

        if(emailType ==="VERIFY"){
            await User.findByIdAndUpdate(userId,
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now()+3600000})
        }else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId,
                {forgetPasswordToken:hashedToken,
                forgetPasswordTokenExpiry: Date.now()+3600000})
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "14faa16d23e066",
              pass: "9c5704bf503810"
            }
          });

          const mailOption ={
            from:'rahulkumar0116@gmail.com',
            to:email,
            subject: emailType === "VERIFY" ? "Verify your email":"Rest Your Password",
            html:`<P> Click <a href="${process.env.domain}/
            verifyemail?token=${hashedToken}">here</a> to $
            {emailType === "VERIFY"?"Verify your email":
            "Reset your password"} 
            or copy and paste the link below in your browser. <br> ${process.env.domain}/verifyemail?token=${hashedToken}
            </p>`
         
        }

        const mailresponse = await transport.sendMail
        (mailOption);
        return mailresponse;

    } catch (error) {
       throw new Error(error.message);
    }
}