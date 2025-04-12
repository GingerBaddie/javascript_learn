# 🍽️ FoodLink – Share a Meal, Spread a Smile

**FoodLink** is a community-driven web platform designed to connect food donors, recipients (NGOs), and volunteers for the purpose of reducing food waste and supporting the hungry. Built using HTML, CSS, JavaScript, PHP, and MySQL (XAMPP).


---

## 🧠 Project Overview

**Theme:** Community Building  
**Project Duration:** 7 Hours  
**Team Size:** 4 Members  
**Technology Stack:** HTML, CSS, JavaScript, PHP (XAMPP), MySQL

---

## ✨ Key Features

- 🔐 **User Authentication**: Secure login and registration for all users
- 👤 **Role-Specific Registration**:
  - **Donors**: Provide organization name, address, and donation availability
  - **Recipients**: Provide personal details and food requirements
  - **Volunteers**: Provide basic contact info to assist in food delivery
- 🌍 **Dynamic Interface**: Visually appealing background image slideshow and motivational quotes
- 📱 **Responsive & Scrollable Forms**: Adapts to screen size; smooth transitions between role-based fields
- 🛡️ **Input Validations**: Unique mobile numbers; proper format for phone, email, and password

---

## 🔗 Live Demo

> _Coming Soon..._

---

## 📂 Folder Structure

```
FoodQuality and Hunger/
│
├── CSS/
│   ├── Login_signUp.css
│   ├── donor.css
│   ├── donordash.css
│   └── style.css
│
├── HTML/
│   ├── FeedBack_Page.html
│   ├── Home_page.html
│   ├── SignUp_and_Login_Page.html
│   ├── donor.html
│   ├── donordash.html
│   ├── ngo_map.html
│   ├── submit_restaurant.html
│   └── thank_youpage.html
│
├── IMAGES/
│   ├── bg.jpg
│   ├── bg1.jpg
│   ├── bg2.jpg
│   ├── bg3.jpg
│   ├── delivery.jpeg
│   ├── pickup.jpeg
│   └── share-food.jpeg
│
├── PHP/
│   ├── get_restaurants.php
│   ├── login.php
│   ├── register.php
│   ├── submit_form.php
│   └── submit_restaurant.php
│
└── README.md

```

---

## 🔧 Tech Stack

| Layer        | Technologies Used                   |
|--------------|--------------------------------------|
| Frontend     | HTML, CSS, JavaScript                |
| Backend      | PHP                                  |
| Database     | MySQL via XAMPP                      |
| Styling      | Custom CSS (glassmorphism UI)        |
| Auth         | Role-based Registration/Login        |

---

## 👤 User Roles

### 1. Donor
- Can register and donate food
- Required fields: Email, Password, Role, Location, Organisation Name, Address, Mobile

### 2. Recipient (NGO)
- Can register to receive food
- Required fields: Same as Donor

### 3. Volunteer
- Can register to deliver food to NGOs
- Required fields: Name, Occupation, Mobile

---


## 🔌 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/foodlink.git
   ```

2. **Start XAMPP**
   - Run Apache & MySQL

3. **Import Database**
   - Open phpMyAdmin
   - Create a database `foodlink`
   - Import the `db/foodlink.sql` file

4. **Configure Database**
   - Open `includes/config.php`
   - Set your DB host, username, and password

5. **Run Project**
   - Go to `http://localhost/foodlink/index.html`

---

## 📸 Screenshots

_(Add screenshots of your login/register UI and dashboard here)_

---

## 🛠️ Upcoming Features

- Admin dashboard
- Donation tracking
- Volunteer delivery assignment system
- Email notifications

---

## 🙌 Team

| Name        | Role             |
|-------------|------------------|
| You         | Full Stack Dev   |
| Teammate 1  | UI/UX Design     |
| Teammate 2  | PHP & DB Dev     |
| Teammate 3  | Volunteer Module |

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ by Team FoodLink – Together, let's fight hunger one plate at a time.
