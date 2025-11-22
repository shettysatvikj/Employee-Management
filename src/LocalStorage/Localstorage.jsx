
 const admin =[ {
    "id": 1,
    "email": "admin@company.com",
    "password": "123"
  }]

const employees = [
  {
    id: 101,
    firstName: "Aarav",
    email: "aarav@company.com",
    password: "123",

    // ⭐ NEW PROPERTY
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },

    tasks: [
      {
  title: "Optimize Landing Page SEO",
  description: "Improve meta tags, headings, and internal linking structure for better search visibility.",
  category: "SEO",
  date: "2025-11-12",
  active: true,
  completed: false,
  failed: false,
  newTask: false
},
      {
        title: "Design Homepage UI",
        description: "Create a responsive homepage layout using TailwindCSS.",
        category: "Design",
        date: "2025-11-08",
        active: false,
        completed: false,
        failed: false,
        newTask: true
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in the navigation bar.",
        category: "Development",
        date: "2025-11-06",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Update Project Docs",
        description: "Add API usage and setup instructions in the project documentation.",
        category: "Documentation",
        date: "2025-11-07",
        active: false,
        completed: false,
        failed: true,
        newTask: false
      }
    ]
  },
  {
    id: 102,
    firstName: "Isha",
    email: "isha@company.com",
    password: "123",

    taskCount: {
      active: 1,
      completed: 2,
      failed: 0,
      newTask: 1
    },

    tasks: [
      {
        title: "Client Meeting",
        description: "Discuss project requirements and deadlines with the client.",
        category: "Management",
        date: "2025-11-05",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Prepare Report",
        description: "Summarize project progress for weekly review.",
        category: "Reporting",
        date: "2025-11-08",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
        title: "Research Competitors",
        description: "Analyze market competition and note unique features.",
        category: "Research",
        date: "2025-11-03",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
  title: "Fix Authentication Bug",
  description: "Resolve the issue causing login failures for users with special characters in their passwords.",
  category: "Bug Fix",
  date: "2025-11-10",
  active: false,
  completed: true,
  failed: false,
  newTask: true
},
    ]
  },
  {
    id: 103,
    firstName: "Rohan",
    email: "rohan@company.com",
    password: "123",

    taskCount: {
      active: 1,
      completed: 2,
      failed: 1,
      newTask: 1
    },

    tasks: [
      {
        title: "Optimize Database",
        description: "Improve query performance for analytics dashboard.",
        category: "Backend",
        date: "2025-11-02",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Implement JWT Auth",
        description: "Add JSON Web Token authentication for API security.",
        category: "Security",
        date: "2025-11-09",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
  title: "Design Dashboard UI",
  description: "Create wireframes and final UI screens for the employee analytics dashboard.",
  category: "UI/UX",
  date: "2025-11-15",
  active: false,
  completed: false,
  failed: false,
  newTask: true
},
      {
        title: "Backup Server Data",
        description: "Create weekly backup of user and log data.",
        category: "Maintenance",
        date: "2025-11-01",
        active: false,
        completed: false,
        failed: true,
        newTask: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from the frontend team.",
        category: "Collaboration",
        date: "2025-11-06",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      }
    ]
  },
  {
    id: 104,
    firstName: "Simran",
    email: "simran@company.com",
    password: "123",

    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },

    tasks: [
      {
        title: "Social Media Campaign",
        description: "Plan and execute a 7-day Instagram ad campaign.",
        category: "Marketing",
        date: "2025-11-08",
        active: true,
        completed: false,
        failed: false,
        newTask: true
      },
      {
        title: "SEO Audit",
        description: "Perform SEO analysis for the company website.",
        category: "SEO",
        date: "2025-11-04",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Blog Post Creation",
        description: "Write a new blog on digital marketing trends.",
        category: "Content",
        date: "2025-11-07",
        active: false,
        completed: false,
        failed: true,
        newTask: false
      }
    ]
  },
  {
    id: 105,
    firstName: "Kabir",
    email: "kabir@company.com",
    password: "123",

    taskCount: {
      active: 1,
      completed: 3,
      failed: 1,
      newTask: 1
    },

    tasks: [
       {
        title: "Social Media Campaign",
        description: "Plan and execute a 7-day Instagram ad campaign.",
        category: "Marketing",
        date: "2025-11-08",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
        title: "Test Payment Gateway",
        description: "Ensure all payment methods are working correctly.",
        category: "QA",
        date: "2025-11-03",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Integrate Analytics",
        description: "Add Google Analytics tracking code to all pages.",
        category: "Analytics",
        date: "2025-11-09",
        active: false,
        completed: false,
        failed: false,
        newTask: true
      },
      {
        title: "Bug Fixes",
        description: "Fix reported issues from QA testing round.",
        category: "Development",
        date: "2025-11-07",
        active: false,
        completed: false,
        failed: true,
        newTask: false
      },
      {
        title: "UI Enhancements",
        description: "Improve button hover effects and animations.",
        category: "Frontend",
        date: "2025-11-06",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Deployment Check",
        description: "Test deployment process for staging environment.",
        category: "DevOps",
        date: "2025-11-05",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      }
    ]
  }
];

  

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
}
