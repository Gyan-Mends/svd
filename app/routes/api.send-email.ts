import nodemailer from 'nodemailer';
import type { ActionFunctionArgs } from 'react-router';

export async function action({ request }: ActionFunctionArgs) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    try {
        const formData = await request.json();
        
        // Log environment variables for debugging (remove in production)
        console.log('SMTP Configuration:');
        console.log('Host:', process.env.SMTP_HOST || 'smtp.gmail.com');
        console.log('Port:', process.env.SMTP_PORT || '587');
        console.log('User:', process.env.SMTP_USER || 'not-set');
        console.log('Pass set:', !!process.env.SMTP_PASS);
        
        // Create SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            debug: true, // Enable debug output
            logger: true // Log information in console
        });

        // Test connection
        await transporter.verify();
        console.log('SMTP connection verified successfully');

        // Get service-specific subject line
        const getServiceSubject = (service: string) => {
            switch (service) {
                case 'court-search':
                    return 'New Court Search Request';
                case 'document-request':
                    return 'New Court Document Request';
                case 'document-verification':
                    return 'New Document Verification Request';
                default:
                    return 'New Court Service Request';
            }
        };

        // Create email content
        const emailContent = `
New Request Submission
=====================

Service Type: ${getServiceSubject(formData.serviceType)}

Personal Information:
- Name: ${formData.name}
- Country: ${formData.country}
- Email: ${formData.email}
- Phone: ${formData.phoneNumber}

Request Details:
- Reason for Request: ${formData.reasonForRequest}
- Verification of Documents: ${formData.verificationDocuments ? 'Yes' : 'No'}
- Requested Document: ${formData.requestedDocument || 'Not specified'}

Instructions:
${formData.instructions || 'No additional instructions provided'}

Uploaded Files: ${formData.fileCount || 0} file(s) attached
${formData.attachments && formData.attachments.length > 0 ? 
    '\nAttached Files:\n' + formData.attachments.map((file: any) => `- ${file.name}`).join('\n') : ''}

Submitted on: ${new Date().toLocaleString()}
        `;

        // Prepare attachments for nodemailer
        const emailAttachments = formData.attachments ? formData.attachments.map((file: any) => ({
            filename: file.name,
            content: file.content,
            encoding: 'base64',
            contentType: file.contentType
        })) : [];

        // Email options
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'gyankwadwomends2001@gmail.com',
            replyTo: formData.email,
            subject: getServiceSubject(formData.serviceType),
            text: emailContent,
            attachments: emailAttachments,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                        New Request Submission
                    </h2>
                    
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1e40af; margin-top: 0;">Service Type</h3>
                        <p style="margin: 5px 0; font-weight: bold;">${getServiceSubject(formData.serviceType)}</p>
                    </div>

                    <div style="margin: 20px 0;">
                        <h3 style="color: #1e40af;">Personal Information</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</li>
                            <li style="margin: 8px 0;"><strong>Country:</strong> ${formData.country}</li>
                            <li style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</li>
                            <li style="margin: 8px 0;"><strong>Phone:</strong> ${formData.phoneNumber}</li>
                        </ul>
                    </div>

                    <div style="margin: 20px 0;">
                        <h3 style="color: #1e40af;">Request Details</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin: 8px 0;"><strong>Reason for Request:</strong> ${formData.reasonForRequest}</li>
                            <li style="margin: 8px 0;"><strong>Verification of Documents:</strong> ${formData.verificationDocuments ? 'Yes' : 'No'}</li>
                            <li style="margin: 8px 0;"><strong>Requested Document:</strong> ${formData.requestedDocument || 'Not specified'}</li>
                        </ul>
                    </div>

                    ${formData.instructions ? `
                    <div style="margin: 20px 0;">
                        <h3 style="color: #1e40af;">Instructions</h3>
                        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${formData.instructions}</div>
                    </div>
                    ` : ''}

                    <div style="margin: 20px 0; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
                        <p style="margin: 0;"><strong>Uploaded Files:</strong> ${formData.fileCount || 0} file(s) attached</p>
                        ${formData.attachments && formData.attachments.length > 0 ? `
                        <div style="margin-top: 10px;">
                            <strong>Attached Files:</strong>
                            <ul style="margin: 5px 0; padding-left: 20px;">
                                ${formData.attachments.map((file: any) => `<li style="margin: 3px 0;">${file.name}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280;">Submitted on: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `
        };

        // Send email
        console.log('Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        return new Response(JSON.stringify({ 
            success: true, 
            message: 'Your request has been submitted successfully! We will contact you soon.' 
        }), { status: 200 });

    } catch (error) {
        console.error('Email sending failed:', error);
        
        // More detailed error logging
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        
        return new Response(JSON.stringify({ 
            success: false, 
            message: `Email sending failed: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your SMTP configuration.` 
        }), { status: 500 });
    }
} 