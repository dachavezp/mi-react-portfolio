import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import boatCompet from '../../assets/boatcompet.png';
import harmonyland from '../../assets/harmonyland.png';
import outlier from '../../assets/outlier.png';
import food from '../../assets/food.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={boatCompet} 
          link={"https://github.com/Mael-221/Boat-Type-Classification-Challenge"}
          title={"Boat Classification"}
          description={"Machine learning model for classifying boat types using Kaggle competition data."}
          technologies={"Python, TensorFlow, OpenCV"}
          role={"Lead Developer"}
        />
        <ProjectCard 
          src={harmonyland} 
          link={"https://github.com/Mael-221/HarmonyLand"}
          title={"HarmonyLand"}
          description={"Drone Surveillance System for real-time monitoring and threat detection."}
          technologies={"Python, OpenCV, DJI SDK"}
          role={"Lead Developer"}
        />
        <ProjectCard 
          src={outlier} 
          link={"https://github.com/Mael-221/ML-for-cybersecurity"}
          title={"ML for Cybersecurity"}
          description={"AI to identify cyber attack patterns and anomalies."}
          technologies={"Python, Scikit-learn, TensorFlow"}
          role={"Data Scientist"}
        />
        <ProjectCard 
          src={food} 
          link={"https://github.com/Mael-221/Restaurant-Recommender-System"}
          title={"Restaurant Recommendation"}
          description={"Recommender system for restaurant recommendations based on user preferences and reviews."}
          technologies={"Python, Flask, React"}
          role={"Full Stack Developer"}
        />
      </div>
    </section>
  );
}

export default Projects;
