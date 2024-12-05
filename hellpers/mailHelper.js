const nodemailer = require('nodemailer');

async function sendEmail(buffer) {
    // Konfigurasi transport untuk menggunakan Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "devgandawijaya@gmail.com",
            pass: "ihpu sple rzcr jduv",
        },
    });


    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const formattedDate = yesterday.toISOString().split('T')[0];

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header, .footer {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h2 {
            margin: 0;
            color: #007bff;
        }
        .footer p {
            font-size: 12px;
            color: #6c757d;
            margin: 0;
        }
        .content p {
            line-height: 1.5;
        }
        .footer hr {
            border: 0;
            border-top: 1px solid #e9ecef;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Auto Email All SN</h2>
        </div>
        <div class="content">
            <p>Halo,</p>
            <p>Berikut adalah data All SN dalam bentuk file Excel yang dihasilkan secara otomatis</p>
            <p>Mohon diperiksa dan ditindaklanjuti jika diperlukan.</p>
        </div>
        <div class="footer">
            <p>Terima kasih,</p>
            <p><b>Tim Otomasi Jadin Pratama</b></p>
            <hr>
            <p>Email ini dikirim secara otomatis oleh sistem. Harap tidak membalas email ini.</p>
        </div>
    </div>
</body>
</html>
`;

    const emails = ['sarah.fitri@jadinpratama.com', 'handy.jadin@gmail.com', 'destiaaraa99@gmail.com','kibeng.siahaan@gmail.com'];


    const mailOptions = {
        from: 'devgandawijaya@gmail.com',
        to: emails,
        bcc: ['tatang.wijaya@jadinpratama.com', 'irwan@jadinpratama.com'],
        subject: 'Auto Email Harian Jam 07:00',
        html: htmlContent,
        attachments: [
            {
                filename: 'all_sn.xlsx',
                content: buffer,
                contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        ]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, response: info.response };
    } catch (error) {
        return { success: false, error: error.toString() };
    }

}


async function sendEmailEmail(buffer, email_to) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "devgandawijaya@gmail.com",
            pass: "ihpu sple rzcr jduv",
        },
    });



    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Notification FMS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header, .footer {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h2 {
            margin: 0;
            color: #007bff;
        }
        .footer p {
            font-size: 12px;
            color: #6c757d;
            margin: 0;
        }
        .content p {
            line-height: 1.5;
        }
        .footer hr {
            border: 0;
            border-top: 1px solid #e9ecef;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Auto Email Laporan All JO</h2>
        </div>
        <div class="content">
            <p>Halo,</p>
            <p>Berikut adalah data All JO dalam bentuk file Excel</p>
            <p>Mohon diperiksa dan ditindaklanjuti jika diperlukan.</p>
        </div>
        <div class="footer">
            <p>Terima kasih,</p>
            <p><b>Tim Otomasi Jadin Pratama</b></p>
            <hr>
            <p>Email ini dikirim secara otomatis oleh sistem. Harap tidak membalas email ini.</p>
        </div>
    </div>
</body>
</html>
`;

    const emails = ['sarah.fitri@jadinpratama.com', 'handy.jadin@gmail.com', 'destiaaraa99@gmail.com','kibeng.siahaan@gmail.com'];

    const mailOptions = {
        from: 'devgandawijaya@gmail.com',
        to: emails,
        bcc: ['tatang.wijaya@jadinpratama.com'],
        subject: 'Mail By All JO',
        html: htmlContent,
        attachments: [
            {
                filename: 'all_jo.xlsx',
                content: buffer,
                contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        ]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, response: info.response };
    } catch (error) {
        return { success: false, error: error.toString() };
    }
}


async function sendAllJobSelesaiKunjungan(buffer) {
    

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "devgandawijaya@gmail.com",
            pass: "ihpu sple rzcr jduv",
        },
    });



    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Notification FMS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header, .footer {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h2 {
            margin: 0;
            color: #007bff;
        }
        .footer p {
            font-size: 12px;
            color: #6c757d;
            margin: 0;
        }
        .content p {
            line-height: 1.5;
        }
        .footer hr {
            border: 0;
            border-top: 1px solid #e9ecef;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Auto Email Laporan All Job Selesai Kunjungan</h2>
        </div>
        <div class="content">
            <p>Halo,</p>
            <p>Berikut adalah data All JO dalam bentuk file Excel</p>
            <p>Mohon diperiksa dan ditindaklanjuti jika diperlukan.</p>
        </div>
        <div class="footer">
            <p>Terima kasih,</p>
            <p><b>Tim Otomasi Jadin Pratama</b></p>
            <hr>
            <p>Email ini dikirim secara otomatis oleh sistem. Harap tidak membalas email ini.</p>
        </div>
    </div>
</body>
</html>
`;

    const emails = ['sarah.fitri@jadinpratama.com', 'handy.jadin@gmail.com', 'destiaaraa99@gmail.com','kibeng.siahaan@gmail.com'];
    const mailOptions = {
        from: 'devgandawijaya@gmail.com',
        to: emails,
        bcc: ['tatang.wijaya@jadinpratama.com'],
        subject: 'Mail By All Job Selesai Kunjunagn',
        html: htmlContent,
        attachments: [
            {
                filename: 'all_jobselesaikunjungan.xlsx',
                content: buffer,
                contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        ]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, response: info.response };
    } catch (error) {
        return { success: false, error: error.toString() };
    }



}

async function sendReportPM(buffer) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "devgandawijaya@gmail.com",
            pass: "ihpu sple rzcr jduv",
        },
    });

    const today = new Date();
    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 3);
    const startDate = oneMonthAgo; 
    const endDate = today; 
    const formatDate = (date) => date.toISOString().split('T')[0];
    const period = `${formatDate(startDate)} sampai ${formatDate(endDate)}`;

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Notification FMS</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #f8f9fa;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header, .footer {
                text-align: center;
                margin-bottom: 20px;
            }
            .header h2 {
                margin: 0;
                color: #007bff;
            }
            .footer p {
                font-size: 12px;
                color: #6c757d;
                margin: 0;
            }
            .content p {
                line-height: 1.5;
            }
            .footer hr {
                border: 0;
                border-top: 1px solid #e9ecef;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Auto Email Laporan PM ${period}</h2>
                <p><strong>Periode Laporan: ${period}</strong></p>
            </div>
            <div class="content">
                <p>Halo,</p>
                <p>Berikut adalah data Laporan PM ${period} Bulan dalam bentuk file Excel</p>
                <p>Mohon diperiksa dan ditindaklanjuti jika diperlukan.</p>
            </div>
            <div class="footer">
                <p>Terima kasih,</p>
                <p><b>Tim Otomasi Jadin Pratama</b></p>
                <hr>
                <p>Email ini dikirim secara otomatis oleh sistem. Harap tidak membalas email ini.</p>
            </div>
        </div>
    </body>
    </html>
    `;

    const emails = ['sarah.fitri@jadinpratama.com', 'handy.jadin@gmail.com', 'destiaaraa99@gmail.com','kibeng.siahaan@gmail.com'];

    const mailOptions = {
        from: 'devgandawijaya@gmail.com',
        to: emails,
        bcc: ['tatang.wijaya@jadinpratama.com'],
        subject: 'Mail By Report PM',
        html: htmlContent,
        attachments: [
            {
                filename: `reportpm ${period}.xlsx`,
                content: buffer,
                contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        ]
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, response: info.response };
    } catch (error) {
        return { success: false, error: error.toString() };
    }
}


module.exports = {
    sendEmail, sendEmailEmail, sendAllJobSelesaiKunjungan, sendReportPM
};