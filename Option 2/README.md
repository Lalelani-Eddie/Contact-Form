---

```markdown
# Contact Form Project

This project is a responsive and interactive **Contact Form** that allows users to submit their details and messages. The form is designed with a modern UI, including a loading spinner and a blurred background effect while the page is loading.

## Features

- **Responsive Design**: Works seamlessly on all devices (desktop, tablet, mobile).
- **Loading Spinner**: Displays a rotating logo as a loading indicator.
- **Blurred Background**: Blurs the page content while the form is loading.
- **Form Validation**: Ensures all required fields are filled before submission.
- **Email Integration**: Sends form data to a specified email address using a backend server.

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (Flexbox, Animations)
  - JavaScript (Fetch API for form submission)
- **Backend**:
  - Node.js
  - Express.js
  - Nodemailer (for sending emails)

## Live Demo

You can view a live demo of the project [here](#) (replace with your live URL).

## Screenshots

![Contact Form Screenshot](#)  
*Replace with an actual screenshot of your project.*

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- A Gmail account (or any email service) for sending emails.

### Step 1: Clone the Repository

```bash
git clone https://github.com/Lalelani-Eddie/contact-form.git
cd contact-form
```

### Step 2: Install Dependencies

Navigate to the `backend` folder and install the required dependencies:

```bash
cd backend
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `backend` folder and add your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

### Step 4: Run the Backend Server

Start the backend server:

```bash
node server.js
```

The server will run on `http://localhost:3000`.

### Step 5: Open the Frontend

Open the `index.html` file in the `frontend` folder in your browser. The form should now be functional.

## Usage

1. Fill out the form with your details:
   - Full Name
   - Contact Number
   - Company/Organization
   - Email Address
   - Message
2. Click the **Submit** button.
3. A loading spinner will appear while the form is being processed.
4. Once the submission is successful, you will receive a confirmation message.

## Backend API

The backend exposes a single endpoint for form submission:

- **POST `/send-email`**: Sends the form data to the specified email address.

### Request Body

```json
{
  "fullName": "John Doe",
  "contact": "1234567890",
  "company": "Example Corp",
  "email": "john.doe@example.com",
  "projectDetails": "This is a test message."
}
```

### Response

- **Success**:
  ```json
  {
    "success": true,
    "message": "Email sent successfully"
  }
  ```
- **Error**:
  ```json
  {
    "success": false,
    "message": "Failed to send email"
  }
  ```

## Deployment

### Frontend

Deploy the `frontend` folder to a static hosting service like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

### Backend

Deploy the `backend` folder to a Node.js hosting service like [Render](https://render.com/) or [Heroku](https://heroku.com/).

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/Lalelani-Eddie)
```

---

### **How to Use This README**
1. Replace placeholders like `your-username`, `your-email@gmail.com`, and `your-email-password` with your actual information.
2. Add a live demo URL and screenshots to make the README more engaging.
3. Update the **Contributing** and **Contact** sections as needed.

---
