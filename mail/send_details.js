require('dotenv').config();

const content = (time, date, name, number, amount, services, from, to) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Monthly Recap</title>
      <style>
        .monthly-recap {
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          background-color: #e6f2ed;
        }
        .brand-header {
          padding: 32px;
        }
        .brand-logo {
          width: 69px;
          height: 24px;
        }
        .recap-hero {
          padding: 0 32px 32px;
        }
        .recap-title {
          font-size: 44px;
          line-height: 50px;
          font-weight: 700;
          color: #111;
          margin-bottom: 16px;
        }
        .details-content{
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .recap-subtitle {
          font-size: 20px;
          line-height: 30px;
          color: #111;
        }
        .stats-grid {
          display: flex;
          gap: 8px;
          padding: 8px 32px;
          flex-wrap: wrap;
        }
        .stat-item {
          flex: 1;
          border-radius: 8px;
          padding: 24px 8px;
          text-align: center;
          min-width: 160px;
          background-color: #fff;
        }
        .stat-image {
          width: 88px;
          height: 88px;
          margin: 0 auto 4px;
        }
        .stat-value {
          font-size: 28px;
          line-height: 34px;
          color: #111;
          margin-bottom: 4px;
        }
        .stat-description {
          color: #111;
          font: 14px/20px "Inter", sans-serif;
        }
        .vehicle-visual {
          padding: 32px 0 0;
          background-color: #e6f2ed;
        }
        .vehicle-image {
          width: 100%;
          height: auto;
        }
        .quick-access {
          padding: 64px 32px;
          text-align: left;
          background-color: #f5f5f5;
        }
        .quick-access-icon {
          width: 32px;
          height: 32px;
          margin-bottom: 8px;
        }
        .quick-access-title {
          font-size: 28px;
          line-height: 32px;
          color: #111;
          margin: 12px 0;
        }
        .quick-access-text {
          font-size: 16px;
          line-height: 24px;
          color: #111;
          margin-bottom: 12px;
        }
        .app-link {
          color: #111;
          font-weight: 700;
          text-decoration: none;
        }
        .page-footer {
          padding: 64px 32px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
          background-color: #000;
        }
        .footer-content {
          color: #aaa;
          font-size: 12px;
          line-height: 1.5;
        }
        .footer-link {
          color: #aaa;
          text-decoration: underline;
        }
        .social-links {
          display: flex;
          gap: 16px;
        }
        .social-icon {
          width: 24px;
          height: 24px;
        }
        @media (max-width: 640px) {
          .brand-header {
            padding: 0 20px;
          }
          .recap-hero {
            padding: 0 20px;
          }
          .recap-title {
            font-size: 32px;
            line-height: 40px;
          }
          .stats-grid {
            flex-direction: column;
            padding: 0 20px;
          }
          .stat-item {
            width: 100%;
          }
          .quick-access {
            padding: 0 20px;
          }
          .page-footer {
            padding: 40px 20px;
            flex-direction: column;
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      </style>
    </head>
    <body>
      <div class="monthly-recap">
        <header class="brand-header">
          <p>DropTaxi</p>
        </header>
  
        <section class="recap-hero">
          <h1 class="recap-title">Hey, You got a "New Order"</h1>
          <h1>Details</h1>
          <div class="details-content">
            <div>Date: ${date}</div>
           
          </div>
           <div>Time: ${time}</div>
          <div class="details-content">
            <div>Number: ${number}</div>
            
          </div>
          <div>Name: ${name}</div>
          <div class="details-content">
            <div>From: ${from}</div>
            
          </div>
          <div>To: ${to}</div>
          <div class="details-content">
            <div>Amount: ${amount}</div>
            
          </div>
          <div>services: ${services}</div>
        </section>
  
        <div class="vehicle-visual">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/88454e1d78ab8f5bed7d97c522e3a9fbc41e4360f62ae3b2aca6f65ffafbadf3?apiKey=ae5b3826b89b42c9aaf510c50318e14e&" alt="Vehicle Illustration" class="vehicle-image">
        </div>
      </div>
    </body>
    </html>
    `;
};

const mailoptions = (time, date, name, number, amount, services, from, to) => ({
    from: process.env.AUTH_USER,
    to: process.env.RECIVER_MAIL,
    subject: "NEW ORDER",
    html: content(time, date, name, number, amount, services, from, to)
});

module.exports = mailoptions;