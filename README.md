# ITUE301 - Advanced Web Development Frameworks
## Static Course Website

A fully responsive, static website for the Advanced Web Development Frameworks course at CHARUSAT. Built with Bootstrap 5, vanilla JavaScript, and powered by Google Sheets as a data source.

---

## 🚀 Quick Start

### Prerequisites
- **VS Code** with **Live Server extension** installed
- **Google Sheets** (optional, for dynamic content)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Running the Website

1. **Open the project folder in VS Code**
   ```
   Open Folder → Select the 'website' directory
   ```

2. **Start Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will open at `http://127.0.0.1:5500`

3. **Navigate the site**
   - Use the navbar to explore all 5 pages
   - Toggle between Student/Faculty views using the switch in the navbar

---

## 📁 File Structure

```
website/
├── index.html              # Home page with course intro
├── overview.html           # Course structure and outcomes
├── practicals.html         # Weekly practicals (accordion)
├── assignments.html        # Assignments (card grid)
├── resources.html          # Learning resources (table)
├── style.css               # Custom styles (Bootstrap overrides)
└── main.js                 # Utility functions & data fetching
```

---

## 🎨 Features

### 1. **Student/Faculty View Toggle**
- Toggle switch in navbar (top-right)
- State persists across pages via `localStorage`
- Student view: Hides rubrics, teaching guides, internal notes
- Faculty view: Shows all content including grading criteria

### 2. **Responsive Design**
- Mobile-first approach
- Works seamlessly on phones, tablets, and desktops
- Bootstrap 5 grid system ensures proper layout

### 3. **Dynamic Content Loading**
- Fetches data from Google Sheets (published as CSV)
- Loading spinners during data fetch
- User-friendly error messages on failure
- Mock data included for testing without Google Sheets

### 4. **Interactive Features**
- **Practicals page**: Search/filter by week or keyword
- **Assignments page**: Filter by week number
- **Resources page**: Filter by resource type (Coursera/YouTube/Docs)
- All filters update instantly without page reload

### 5. **Clean Academic Design**
- Color scheme: Primary dark blue (#1F4E79), accent light blue (#D6E4F0)
- Font: Inter (Google Fonts)
- Week badges color-coded by topic area:
  - **Green** (Weeks 1-3): Frontend
  - **Blue** (Weeks 4-7): Backend
  - **Yellow** (Weeks 8-10): Optimization
  - **Red** (Weeks 11-13): DevOps/AI

---

## 📊 Setting Up Google Sheets (Optional)

### Why Google Sheets?
- **No database required**: Simple CSV export
- **Easy to update**: Edit content in familiar spreadsheet interface
- **Collaborative**: Multiple instructors can update content
- **Version control**: Google Sheets maintains edit history

### Step-by-Step Setup

#### 1. Create Google Sheets
Create 5 separate Google Sheets with these structures:

**Sheet 1: Practicals** (`SHEET_PRACTICALS`)
| Week | Practical Title | CO | Topics Covered | Coursera Module | GitHub Template | Faculty Teaching Guide | Common Mistakes | Rubric |
|------|----------------|----|-----------------|-----------------|-----------------|-----------------------|-----------------|--------|
| 1 | React Basics - Components & JSX | CO1 | React setup, JSX... | https://... | https://... | Focus on JSX... | Forgetting imports... | Component (5)... |

**Sheet 2: Assignments** (`SHEET_ASSIGNMENTS`)
| Week | Assignment Title | Topics Covered | CO | GitHub Repo | Marks | Auto-graded | Rubric | Expected Workflow |
|------|-----------------|----------------|----|--------------| ------|-------------|--------|-------------------|
| 4 | Build a RESTful Task API | Express.js, REST... | CO2 | https://... | 10 | Yes | API endpoints (4)... | All tests pass... |

**Sheet 3: Resources** (`SHEET_RESOURCES`)
| Week | Resource Name | Type | URL | Notes | Coverage |
|------|--------------|------|-----|-------|----------|
| 1-3 | React Basics Course | Coursera | https://... | Comprehensive intro... | CO1 - React Components... |

**Sheet 4: Overview** (`SHEET_OVERVIEW`)
| Week | Lab Focus | Unit/CO | Weightage % |
|------|-----------|---------|-------------|
| 1 | React Fundamentals | CO1 | 8% |

**Sheet 5: CO Matrix** (`SHEET_CO_MATRIX`)
| Week | CO1 | CO2 | CO3 | CO4 | CO5 | CO6 |
|------|-----|-----|-----|-----|-----|-----|
| 1 | ● | | | | | |

#### 2. Publish Sheets as CSV

For each sheet:
1. Click **File → Share → Publish to web**
2. Select the specific sheet/tab
3. Choose **Comma-separated values (.csv)** format
4. Click **Publish**
5. Copy the generated URL

#### 3. Update main.js with URLs

Open `main.js` and replace placeholder URLs:

```javascript
// TODO: Replace these placeholder URLs with actual Google Sheets CSV URLs
const SHEET_PRACTICALS = 'YOUR_ACTUAL_CSV_URL_HERE';
const SHEET_ASSIGNMENTS = 'YOUR_ACTUAL_CSV_URL_HERE';
const SHEET_RESOURCES = 'YOUR_ACTUAL_CSV_URL_HERE';
const SHEET_OVERVIEW = 'YOUR_ACTUAL_CSV_URL_HERE';
const SHEET_CO_MATRIX = 'YOUR_ACTUAL_CSV_URL_HERE';
```

#### 4. Test the Integration

1. Refresh the website in Live Server
2. Check browser console (F12) for any errors
3. Verify data loads correctly on each page
4. Test error handling by using an invalid URL

---

## 🔧 Customization Guide

### Changing Colors

Edit `style.css` CSS variables:
```css
:root {
  --primary-blue: #1F4E79;    /* Main brand color */
  --accent-blue: #D6E4F0;     /* Light accent */
  --white: #ffffff;           /* Background */
}
```

### Adding New Pages

1. Duplicate an existing HTML file
2. Update navbar active link
3. Update page title and hero section
4. Add page-specific JavaScript if needed
5. Add link to navbar in all other pages

### Modifying Static Content

- **Course Identification**: Edit tables in `overview.html`
- **Course Outcomes**: Edit the CO table in `overview.html`
- **Weekly Session Structure**: Edit table in `overview.html`
- **Tech Stack Icons**: Modify icon section in `index.html`

### Changing Week Badge Colors

Edit `getWeekBadgeClass()` function in `main.js`:
```javascript
function getWeekBadgeClass(week) {
  const weekNum = parseInt(week);
  if (weekNum >= 1 && weekNum <= 3) return 'week-badge-frontend';
  // Modify ranges as needed
}
```

---

## 🐛 Troubleshooting

### Live Server Not Working
- **Issue**: Page doesn't open in browser
- **Solution**: Install Live Server extension from VS Code marketplace
- **Alternative**: Use Python: `python3 -m http.server 8000` in terminal

### Faculty View Not Showing Content
- **Issue**: Toggle switch doesn't reveal faculty content
- **Check**: Open browser console (F12), look for JavaScript errors
- **Solution**: Clear browser localStorage: `localStorage.clear()` in console

### Google Sheets Data Not Loading
- **Issue**: Tables/accordion remain empty
- **Check**: Open browser console, look for fetch errors
- **Solutions**:
  - Verify sheet is published (not just shared)
  - Verify CSV format is selected (not HTML)
  - Check for CORS issues (should work with public sheets)
  - Test with mock data first (comment out fetch, use hardcoded data)

### Styling Issues
- **Issue**: Page looks broken or unstyled
- **Check**: Verify `style.css` is in the same folder as HTML files
- **Check**: Verify Bootstrap CDN is loading (check Network tab in DevTools)
- **Solution**: Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Search/Filter Not Working
- **Issue**: Search input or filter buttons don't work
- **Check**: Open console for JavaScript errors
- **Solution**: Verify `main.js` is loading correctly

---

## 📱 Browser Support

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Note**: Internet Explorer is NOT supported (uses modern JavaScript features)

---

## 🔐 Security Notes

### API Keys & Secrets
- ⚠️ Never commit API keys to Git
- Store OpenAI/MongoDB keys in environment variables
- For static sites, use backend proxy for sensitive operations

### Google Sheets Privacy
- Published sheets are **publicly accessible**
- Don't include sensitive information (student grades, personal data)
- Use faculty-only content for instructional guidance only

---

## 📝 Mock Data vs. Real Data

### Current Status
The website currently uses **mock data** hardcoded in each page's JavaScript. This allows you to:
- Test functionality immediately
- See example data structure
- Develop without Google Sheets setup

### Switching to Real Data
1. Create Google Sheets with proper structure (see above)
2. Publish sheets as CSV
3. Update URLs in `main.js`
4. Remove or comment out mock data in page-specific `<script>` tags

---

## 🎯 Project Highlights

### What Makes This Special
- ✅ **Zero dependencies**: No npm, no build tools, no frameworks
- ✅ **Runs anywhere**: Any computer with a browser and VS Code
- ✅ **Easy maintenance**: Update content in Google Sheets
- ✅ **Responsive**: Works on all devices
- ✅ **Role-based views**: Student/Faculty toggle
- ✅ **Modern design**: Bootstrap 5 + custom styling
- ✅ **Production ready**: Can deploy to any static host

### Deployment Options
- **GitHub Pages**: Free, easy to set up
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Connect to Git repo
- **Any web server**: Upload files via FTP

---

## 📚 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **JavaScript (ES6+)**: Async/await, Fetch API, LocalStorage
- **Bootstrap 5.3.2**: Grid, components, utilities
- **Bootstrap Icons**: Icon library
- **Devicon**: Tech stack icons
- **Google Fonts**: Inter font family
- **Google Sheets**: Data source (CSV export)

---

## 🤝 Contributing

### For Instructors
1. Edit content in Google Sheets
2. Changes reflect immediately on website (after refresh)
3. No coding required for content updates

### For Developers
1. HTML files: Page structure and content
2. CSS file: Styling and responsive design
3. JS file: Data fetching and interactivity
4. Test locally with Live Server
5. Deploy to production server

---

## 📞 Support

For issues or questions:
- Check browser console for errors
- Review this README thoroughly
- Test with mock data first before Google Sheets integration
- Ensure all files are in the same directory

---

## 📄 License

This project is created for educational purposes for ITUE301 course at CHARUSAT.

---

## ✨ Next Steps

1. ✅ **Test the website**: Open with Live Server and explore all pages
2. ⏭️ **Create Google Sheets**: Set up 5 sheets with course data
3. ⏭️ **Update URLs**: Replace placeholders in main.js
4. ⏭️ **Customize content**: Edit static sections as needed
5. ⏭️ **Deploy**: Upload to hosting service

---

**Built with ❤️ for CHARUSAT students learning Advanced Web Development Frameworks**

*Last updated: June 24, 2026*
