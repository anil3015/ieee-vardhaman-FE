import { Slide, Society, Council, PastEvent, UpcomingEvent, Achievement, GalleryItem } from '../types';

export const slides: Slide[] = [
  {
    title: "Welcome to IEEE Vardhaman",
    subtitle: "Advancing Technology for Humanity",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Join the world's largest technical professional organization"
  },
  {
    title: "Innovation & Excellence",
    subtitle: "Shaping the Future of Technology",
    image: "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Empowering students through technical excellence and innovation"
  },
  {
    title: "Technical Leadership",
    subtitle: "Building Tomorrow's Engineers",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Fostering leadership and professional development"
  }
];

export const societies: Society[] = [
  { name: "Computer Society", /* description: "Advancing computing technology", */ image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
  { name: "Power & Energy Society", /* description: "Sustainable energy solutions", */ image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
  { name: "Signal Processing Society", /* description: "Signal & image processing", */ image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" },
  { name: "Communications Society", /* description: "Communication technologies", */ image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png" },
  { name: "Robotics & Automation", /* description: "Robotics and intelligent systems", */ image: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" },
  { name: "Aerospace & Electronic Systems", /* description: "Aerospace technologies", */ image: "https://cdn-icons-png.flaticon.com/512/1995/1995507.png" }
];

export const councils: Council[] = [
  { name: "Student Activities Committee", /* description: "Organizing student events and activities", */ image: "https://cdn-icons-png.flaticon.com/512/2965/2965416.png" },
  { name: "Women in Engineering", /* description: "Promoting gender diversity in engineering", */ image: "https://cdn-icons-png.flaticon.com/512/2965/2965380.png" },
  { name: "Young Professionals", /* description: "Career development for recent graduates", */ image: "https://cdn-icons-png.flaticon.com/512/2965/2965391.png" },
  { name: "Technical Activities", /* description: "Coordinating technical programs", */ image: "https://cdn-icons-png.flaticon.com/512/2965/2965403.png" }
];

export const pastEvents: PastEvent[] = [
  {
    title: "International Conference on AI",
    date: "March 15, 2024",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    participants: "500+",
    hostingBranchName: "IEEE Computer Society",
    hostingBranchLogo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
  },
  {
    title: "Robotics Workshop",
    date: "February 20, 2024",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    participants: "200+",
    hostingBranchName: "IEEE Robotics & Automation Society",
    hostingBranchLogo: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
  },
  {
    title: "IEEE Day Celebration",
    date: "October 1, 2023",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    participants: "1000+",
    hostingBranchName: "IEEE Student Branch",
    hostingBranchLogo: "https://res.cloudinary.com/doyh3fqr5/image/upload/c_crop,w_1000,h_780/v1750524389/IEEE_VCE_SB_-_TBG_j8tonl.png"
  }
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "5G Technology Symposium",
    date: "June 15, 2024",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Exploring the future of wireless communication",
    registrations: "150",
    hostingBranchName: "IEEE Communications Society",
    hostingBranchLogo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
  },
  {
    title: "Machine Learning Bootcamp",
    date: "July 10, 2024",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Hands-on ML training for students",
    registrations: "250",
    hostingBranchName: "IEEE Computer Society",
    hostingBranchLogo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
  },
  {
    title: "Entrepreneurship Summit",
    date: "August 5, 2024",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Innovation and startup ecosystem",
    registrations: "100",
    hostingBranchName: "IEEE Young Professionals",
    hostingBranchLogo: "https://cdn-icons-png.flaticon.com/512/2965/2965391.png"
  }
];

export const achievements: Achievement[] = [
  { title: "Best Student Branch Award", year: "2024", description: "IEEE Region 10 Recognition", image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1750567600/download_aib5cd.jpg" },
  { title: "Outstanding Volunteer Award", year: "2023", description: "Individual Excellence Recognition", image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1750567579/download_eldpyw.png" },
  { title: "Technical Innovation Prize", year: "2023", description: "IEEE India Council Award", image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1750567570/download_lxk9gv.jpg" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 300,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 250,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 350,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 280,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 320,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/106368/pexels-photo-106368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 270,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 290,
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 350,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 250,
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 240,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 330,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 270,
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 300,
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 250,
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "#",
    height: 350,
  },
];
