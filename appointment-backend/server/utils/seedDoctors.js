
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Doctor from '../models/Doctor.js';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedDoctors = async () => {
    try {
        await Doctor.deleteMany();
        await User.deleteMany({role: "doctor"});

         const hashedPassword = await bcrypt.hash("123456", 10);

        const doctorsData = [
          {
            name: "Dr Arjun Mehta",
            email: "arjun@gmail.com",
            specialization: "Cardiologist",
            experience: 12,
            consultationFee: 900,
            hospitalName: "Apollo Hospital",
            profileImage: "/doctors/doctorImage1.jpg",
          },
          {
            name: "Dr Kavya Rao",
            email: "kavya@gmail.com",
            specialization: "Neurologist",
            experience: 8,
            consultationFee: 1000,
            hospitalName: "Fortis Hospital",
            profileImage: "/doctors/doctorImage2.jpg",
          },
          {
            name: "Dr Priya Sharma",
            email: "priya@gmail.com",
            specialization: "Dermatologist",
            experience: 7,
            consultationFee: 600,
            hospitalName: "City Care Hospital",
            profileImage: "/doctors/doctorImage3.jpg",
          },
          {
            name: "Dr Rohit Verma",
            email: "rohit@gmail.com",
            specialization: "Orthopedic",
            experience: 15,
            consultationFee: 850,
            hospitalName: "Global Hospital",
            profileImage: "/doctors/doctorImage4.jpg",
          },
          {
            name: "Dr Sneha Iyer",
            email: "sneha@gmail.com",
            specialization: "Pediatrician",
            experience: 10,
            consultationFee: 700,
            hospitalName: "Rainbow Hospital",
            profileImage: "/doctors/doctorImage5.jpg",
          },
          {
            name: "Dr Vikram Singh",
            email: "vikram@gmail.com",
            specialization: "ENT Specialist",
            experience: 9,
            consultationFee: 650,
            hospitalName: "Max Hospital",
            profileImage: "/doctors/doctorImage6.jpg",
          },
          {
            name: "Dr Anjali Kapoor",
            email: "anjali@gmail.com",
            specialization: "Gynecologist",
            experience: 11,
            consultationFee: 950,
            hospitalName: "Mother Care Hospital",
            profileImage: "/doctors/doctorImage7.jpg",
          },
          {
            name: "Dr Manish Gupta",
            email: "manish@gmail.com",
            specialization: "Psychiatrist",
            experience: 14,
            consultationFee: 1100,
            hospitalName: "Mind Wellness Clinic",
            profileImage: "/doctors/doctorImage8.jpg",
          },
          {
            name: "Dr Neha Reddy",
            email: "neha@gmail.com",
            specialization: "Ophthalmologist",
            experience: 6,
            consultationFee: 750,
            hospitalName: "Vision Eye Center",
            profileImage: "/doctors/doctorImage9.jpg",
          },
          {
            name: "Dr Amit Patel",
            email: "amit@gmail.com",
            specialization: "General Physician",
            experience: 13,
            consultationFee: 500,
            hospitalName: "Community Health Center",
            profileImage: "/doctors/doctorImage10.jpg",
          },
          {
            name: "Dr Rahul Nair",
            email: "rahul.nair@gmail.com",
            specialization: "Urologist",
            experience: 16,
            consultationFee: 950,
            hospitalName: "Sunrise Multispeciality Hospital",
            profileImage: "/doctors/doctorImage11.jpg",
          },
          {
            name: "Dr Meera Krishnan",
            email: "meera.krishnan@gmail.com",
            specialization: "Endocrinologist",
            experience: 9,
            consultationFee: 1050,
            hospitalName: "Care Plus Hospital",
            profileImage: "/doctors/doctorImage12.jpg",
          },
        ];

    for(let doc of doctorsData) {
        const user = await User.create({
            name: doc.name,
            email: doc.email,
            password: hashedPassword,
            role: "doctor"
        });

        await Doctor.create({
            userId: user._id,
            specialization: doc.specialization,
            experience: doc.experience,
            consultationFee: doc.consultationFee,
            hospitalName: doc.hospitalName,
            about: `${doc.specialization} with ${doc.experience} years of experience. Practicing at ${doc.hospitalName}.`,
            profileImage: doc.profileImage
        });
    }
    console.log("Doctors seeded successfully");
    process.exit();
    }
    catch (error) {
        console.error("Error Seeding Doctors:", error);
        process.exit(1);
    }
}

seedDoctors();