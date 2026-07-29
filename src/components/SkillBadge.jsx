import { isValidElement } from "react";
import styles from './SkillBadge.module.css';

function SkillBadge({ skill }) {
    return (
        <button className={styles.badge}>
            {isValidElement(skill) ? skill : <span>{skill}</span>}
            
        </button>
        
    );
}

export default SkillBadge;