import React from 'react';
import styles from '../../styles/Courses.module.css';
import ImageCarousel from '../../components/layouts/carousel'; 

const courses = [
    { id: 1, name: 'Computer Science', description: 'Learn about algorithms, data structures, and software design.' },
    { id: 2, name: 'Mathematics', description: 'Explore calculus, linear algebra, and differential equations.' },
    { id: 3, name: 'Physics', description: 'Understand the fundamental principles of matter and energy.' },
    { id: 4, name: 'Chemistry', description: 'Dive into chemical reactions, organic chemistry, and lab techniques.' },
    { id: 5, name: 'Biology', description: 'Study genetics, cell biology, and evolutionary biology.' },
    { id: 6, name: 'Engineering', description: 'Learn about mechanical, electrical, and civil engineering.' },
    { id: 7, name: 'Astronomy', description: 'Explore the universe, stars, and planetary systems.' },
    { id: 8, name: 'Environmental Science', description: 'Understand ecosystems, conservation, and environmental policy.' }
];

const images = [
   'https://twincitieskidsclub.com/wp-content/uploads/2018/01/yay-19591000-digital.jpg',
   'https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-893618968_master.jpg?w=2880&quality=85',
   'https://www.rootsofaction.com/wp-content/uploads/2019/01/How-Children-Learn.jpg',
   'https://th.bing.com/th/id/R.7f00c67197d65f08c65f1314da813c06?rik=6RRqXzQzUMQAyg&pid=ImgRaw&r=0'
]



const STEMCourses = () => {
    return (
        <div className={styles.container}>
            
            <h1 className={styles.title}>STEM Courses</h1>
            <div className={styles.courses}>
                {courses.map(course => (
                    <div key={course.id} className={styles.courseCard}>
                        <h2 className={styles.courseName}>{course.name}</h2>
                        <p className={styles.courseDescription}>{course.description}</p>
                    </div>
                ))}
            </div>
            <div style={{margin: '50px auto'}}>
            <ImageCarousel images={images} />
            </div>
        </div>
    );
};

export default STEMCourses;
