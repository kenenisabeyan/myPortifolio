/* ===== Courses page logic ===== */

// sample courses data (replace with real data later)
const coursesData = [
  { id: 1, title: "Mathematics - Grade 10", category: "math", level: "Grade 10", price: "Free" },
  { id: 2, title: "English Grammar Basics", category: "language", level: "Grade 8", price: "Affordable" },
  { id: 3, title: "Science: Physics Fundamentals", category: "science", level: "Grade 11", price: "Affordable" },
  { id: 4, title: "Intro to Python", category: "cs", level: "Beginner", price: "Paid" },
  { id: 5, title: "Algebra Practice", category: "math", level: "Grade 9", price: "Free" },
  { id: 6, title: "Computer Basics & MS Office", category: "cs", level: "All", price: "Free" }
];

// keep track of enrolled courses (IDs) in localStorage
let enrolled = JSON.parse(localStorage.getItem('edot_enrolled') || "[]");

// utility: update enrolled count in header
function updateEnrolledCount() {
  const el = document.getElementById('enrolledCount');
  if (el) el.textContent = `Enrolled: ${enrolled.length}`;
}
updateEnrolledCount();

// render course cards
function renderCourses(list) {
  const grid = document.getElementById('coursesGrid');
  if (!grid) return;
  grid.innerHTML = ''; // clear

  list.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';

    // thumbnail (simple styled box; replace with <img> if you have images)
    const thumb = document.createElement('div');
    thumb.className = 'course-thumb';
    thumb.textContent = course.category.toUpperCase();

    const title = document.createElement('h3');
    title.className = 'course-title';
    title.textContent = course.title;

    const meta = document.createElement('div');
    meta.className = 'course-meta';
    meta.textContent = `${course.level} • ${course.price}`;

    const actions = document.createElement('div');
    actions.className = 'course-actions';

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn-enroll secondary';
    detailsBtn.textContent = 'Details';
    detailsBtn.onclick = () => showCourseDetails(course);

    const enrollBtn = document.createElement('button');
    enrollBtn.className = 'btn-enroll';
    enrollBtn.textContent = enrolled.includes(course.id) ? 'Enrolled' : 'Enroll';
    enrollBtn.disabled = enrolled.includes(course.id);
    enrollBtn.onclick = () => {
      if (!enrolled.includes(course.id)) {
        enrolled.push(course.id);
        localStorage.setItem('edot_enrolled', JSON.stringify(enrolled));
        enrollBtn.textContent = 'Enrolled';
        enrollBtn.disabled = true;
        updateEnrolledCount();
      }
    };

    actions.appendChild(detailsBtn);
    actions.appendChild(enrollBtn);

    card.appendChild(thumb);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(actions);

    grid.appendChild(card);
  });
}

// simple details modal (browser native)
function showCourseDetails(course) {
  const msg = `${course.title}\n\nLevel: ${course.level}\nCategory: ${course.category}\nPrice: ${course.price}\n\nDescription: This course provides practical lessons and exercises.`;
  alert(msg);
}

// initial render
document.addEventListener('DOMContentLoaded', () => {
  renderCourses(coursesData);

  // search and filter events
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const cat = categoryFilter.value;
    const filtered = coursesData.filter(c => {
      const matchQ = q === '' || c.title.toLowerCase().includes(q) || c.level.toLowerCase().includes(q);
      const matchCat = cat === 'all' || c.category === cat;
      return matchQ && matchCat;
    });
    renderCourses(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
});
