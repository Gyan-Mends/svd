import type { ActionFunctionArgs } from 'react-router';

export async function action({ request }: ActionFunctionArgs) {
    console.log('=== EMAIL TEST DEBUG ===');
    
    // Check if environment variables are loaded
    console.log('Environment check:');
    console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NOT SET');
    console.log('SMTP_PORT:', process.env.SMTP_PORT || 'NOT SET');
    console.log('SMTP_USER:', process.env.SMTP_USER || 'NOT SET');
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'SET (length: ' + process.env.SMTP_PASS.length + ')' : 'NOT SET');
    
    try {
        // Try importing nodemailer
        const nodemailer = await import('nodemailer');
        console.log('Nodemailer imported successfully');
        
        // Try creating transporter
        const transporter = nodemailer.default.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
        
        console.log('Transporter created successfully');
        
        // Test connection
        await transporter.verify();
        console.log('SMTP connection verified successfully!');
        
        return new Response(JSON.stringify({
            success: true,
            message: 'SMTP configuration is working!',
            debug: {
                host: process.env.SMTP_HOST || 'not set',
                port: process.env.SMTP_PORT || 'not set',
                user: process.env.SMTP_USER || 'not set',
                passSet: !!process.env.SMTP_PASS
            }
        }), { status: 200 });
        
    } catch (error) {
        console.error('SMTP Test Error:', error);
        
        return new Response(JSON.stringify({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
            debug: {
                host: process.env.SMTP_HOST || 'not set',
                port: process.env.SMTP_PORT || 'not set',
                user: process.env.SMTP_USER || 'not set',
                passSet: !!process.env.SMTP_PASS
            }
        }), { status: 500 });
    }
} 