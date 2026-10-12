/* Base font & colors */
body {
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h3, h2 {
  font-weight: 700;
  color: #c1121f;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Navbar */
.navbar {
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
  color: #c1121f;
}

.navbar-brand i {
  color: #c1121f;
}

.navbar-nav .nav-link {
  margin-right: 1rem;
  transition: color 0.2s ease;
}

.navbar-nav .nav-link:hover {
  color: #c1121f;
}

/* Page height setup */
html, body {
  height: 100%;
  margin: 0;
}

.content {
  flex: 1;
}

/* Footer */
footer {
  background: #c1c0c0;
  border-top: 1px solid #e0e0e0;
  padding: 2rem 0;
  font-size: 0.95rem;
  color: #333;
  text-align: center;
}

.f-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.f-info-socials {
  display: flex;
  gap: 1.5rem;
}

.f-info-socials i {
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
}

.f-info-socials i:hover {
  color: #c1121f;
}

.f-info-brand {
  font-weight: 600;
}

.f-info-links {
  display: flex;
  gap: 1.5rem;
}

.f-info-links a {
  color: #333;
  transition: color 0.2s ease;
}

.f-info-links a:hover {
  color: #c1121f;
  text-decoration: underline;
}

/* Index Cards + Show Page Image */
.listing-link {
  text-decoration: none;
  color: inherit;
}

.card {
  margin: 1rem 0;
  overflow: hidden;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.card-img-top {
  object-fit: cover;
  height: 20rem;
  width: 100%;
  display: block;
}

.card-body {
  padding: 1rem;
}

/* Buttons */
.add-btn, .edit-btn, .btn-primary {
  border-radius: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: #c1121f;
  border: none;
}

.add-btn:hover, .edit-btn:hover, .btn-primary:hover {
  background: #9b0d19;
}

.btn-outline-danger {
  border: 2px solid #c1121f;
  color: #c1121f;
}

.btn-outline-danger:hover {
  background: #c1121f;
  color: #fff;
}

/* Forms */
form .form-label {
  font-weight: 600;
}

form .form-control {
  border-radius: 0.5rem;
}

button {
  cursor: pointer;
}

/* Utility overrides */
.mt-3 {
  margin-top: 1rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.row {
  margin-top: 1rem;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .card-img-top {
    height: 15rem;
  }
}

/* Clean button base */
.btn {
  font-size: 1rem;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
}

/* Review Form Styling */
form .form-label {
  font-weight: 600;
  color: #333;
}

form .form-control,
form .form-range {
  border-radius: 0.5rem;
  font-size: 1rem;
}

form .form-control:focus {
  box-shadow: 0 0 0 0.15rem rgba(193, 18, 31, 0.25);
  border-color: #c1121f;
}

form .btn-primary {
  background-color: #c1121f;
  border: none;
}

form .btn-primary:hover {
  background-color: #9b0d19;
}

.card h4 {
  font-weight: 700;
  color: #c1121f;
}

/* === Reviews Section Styles (Appendable for show.ejs) === */

.review-list {
  margin-top: 2rem;
  padding-left: 0;
  list-style: none;
}

.review-list li {
  background: #ffffff;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: #333;
}

.review-list li .stars {
  color: #f5c518; /* gold color for stars */
  font-weight: 600;
  margin-left: 0.5rem;
}

.review-form {
  margin-top: 2.5rem;
}

.review-form label {
  font-weight: 600;
}

.review-form textarea {
  resize: vertical;
  min-height: 120px;
  border-radius: 10px;
}

.review-form input[type="range"] {
  accent-color: #007bff;
}

/* Ensure footer sticks to bottom if content is short */
.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  flex-grow: 1;
}

/* map */
#map {
  height: 400px;
  width: 80vh;
}