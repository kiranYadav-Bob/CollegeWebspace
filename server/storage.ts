import { randomUUID } from "crypto";
import type {
  User,
  InsertUser,
  ContactSubmission,
  InsertContact,
  Department,
  InsertDepartment,
  Faculty,
  InsertFaculty,
  News,
  InsertNews,
  Event,
  InsertEvent,
  ApplicationSubmission,
  InsertApplication,
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  getDepartments(): Promise<Department[]>;
  getDepartment(id: string): Promise<Department | undefined>;
  createDepartment(department: InsertDepartment): Promise<Department>;
  
  getFaculty(): Promise<Faculty[]>;
  getFacultyMember(id: string): Promise<Faculty | undefined>;
  createFacultyMember(faculty: InsertFaculty): Promise<Faculty>;
  
  getNews(): Promise<News[]>;
  getNewsItem(id: string): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  
  getEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getApplications(): Promise<ApplicationSubmission[]>;
  getApplication(id: string): Promise<ApplicationSubmission | undefined>;
  createApplication(application: InsertApplication): Promise<ApplicationSubmission>;
  updateApplicationStatus(id: string, status: string): Promise<ApplicationSubmission | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, ContactSubmission>;
  private departments: Map<string, Department>;
  private facultyMembers: Map<string, Faculty>;
  private newsItems: Map<string, News>;
  private events: Map<string, Event>;
  private applications: Map<string, ApplicationSubmission>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.departments = new Map();
    this.facultyMembers = new Map();
    this.newsItems = new Map();
    this.events = new Map();
    this.applications = new Map();
    
    this.seedInitialData();
  }

  private seedInitialData() {
    // Seed some initial departments
    const depts = [
      { name: "Computer Science", description: "Cutting-edge technology and software development", coursesCount: 25, icon: "Computer" },
      { name: "Engineering", description: "Mechanical, Civil, and Electrical engineering", coursesCount: 30, icon: "FlaskConical" },
      { name: "Mathematics", description: "Pure and applied mathematics", coursesCount: 15, icon: "Calculator" },
      { name: "Business Administration", description: "MBA and business programs", coursesCount: 20, icon: "Briefcase" },
    ];
    
    depts.forEach(dept => {
      const id = randomUUID();
      this.departments.set(id, { id, ...dept });
    });

    // Seed faculty members
    const facultyList = [
      { name: "Dr. Sarah Johnson", designation: "Professor", department: "Computer Science", qualification: "PhD in CS, MIT", email: "s.johnson@excellence.edu", image: null },
      { name: "Dr. Michael Chen", designation: "Associate Professor", department: "Engineering", qualification: "PhD in Mechanical Eng, Stanford", email: "m.chen@excellence.edu", image: null },
    ];
    
    facultyList.forEach(faculty => {
      const id = randomUUID();
      this.facultyMembers.set(id, { id, ...faculty });
    });

    // Seed news items
    const newsList = [
      { 
        title: "New Library Wing Inaugurated", 
        excerpt: "State-of-the-art library facility with modern digital resources opens to students.",
        content: "The university celebrated the opening of a new library wing featuring cutting-edge technology and collaborative study spaces.",
        category: "Campus News",
        image: null
      },
      { 
        title: "Research Grant Awarded", 
        excerpt: "$2M grant awarded for renewable energy research project.",
        content: "Excellence University's research team has been awarded a prestigious $2 million grant for groundbreaking renewable energy research.",
        category: "Research",
        image: null
      },
    ];
    
    newsList.forEach(news => {
      const id = randomUUID();
      this.newsItems.set(id, { id, ...news, publishedAt: new Date() });
    });

    // Seed events
    const eventsList = [
      {
        title: "Annual Sports Day",
        date: "December 15, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Main Sports Complex",
        category: "Sports",
        image: null
      },
      {
        title: "Tech Symposium 2024",
        date: "December 10, 2024",
        time: "10:00 AM - 4:00 PM",
        location: "Auditorium Hall",
        category: "Academic",
        image: null
      },
    ];
    
    eventsList.forEach(event => {
      const id = randomUUID();
      this.events.set(id, { id, ...event, createdAt: new Date() });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...contact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getDepartments(): Promise<Department[]> {
    return Array.from(this.departments.values());
  }

  async getDepartment(id: string): Promise<Department | undefined> {
    return this.departments.get(id);
  }

  async createDepartment(department: InsertDepartment): Promise<Department> {
    const id = randomUUID();
    const dept: Department = { ...department, id };
    this.departments.set(id, dept);
    return dept;
  }

  async getFaculty(): Promise<Faculty[]> {
    return Array.from(this.facultyMembers.values());
  }

  async getFacultyMember(id: string): Promise<Faculty | undefined> {
    return this.facultyMembers.get(id);
  }

  async createFacultyMember(faculty: InsertFaculty): Promise<Faculty> {
    const id = randomUUID();
    const member: Faculty = { ...faculty, id, image: faculty.image ?? null };
    this.facultyMembers.set(id, member);
    return member;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.newsItems.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getNewsItem(id: string): Promise<News | undefined> {
    return this.newsItems.get(id);
  }

  async createNews(news: InsertNews): Promise<News> {
    const id = randomUUID();
    const item: News = {
      ...news,
      id,
      image: news.image ?? null,
      publishedAt: new Date(),
    };
    this.newsItems.set(id, item);
    return item;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const evt: Event = {
      ...event,
      id,
      image: event.image ?? null,
      createdAt: new Date(),
    };
    this.events.set(id, evt);
    return evt;
  }

  async getApplications(): Promise<ApplicationSubmission[]> {
    return Array.from(this.applications.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getApplication(id: string): Promise<ApplicationSubmission | undefined> {
    return this.applications.get(id);
  }

  async createApplication(application: InsertApplication): Promise<ApplicationSubmission> {
    const id = randomUUID();
    const submission: ApplicationSubmission = {
      ...application,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.applications.set(id, submission);
    return submission;
  }

  async updateApplicationStatus(id: string, status: string): Promise<ApplicationSubmission | undefined> {
    const application = this.applications.get(id);
    if (!application) return undefined;
    
    const updated = { ...application, status };
    this.applications.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
