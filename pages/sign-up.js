import React from 'react';
import styles from './../public/scss/SignupPage.module.scss'; 

const SignupPage = () => {
    return (
        <div className={styles.signupPageWrapper}>
            <section className={styles.signupSectionCentered}>
                <div className={styles.signupContainer}>
                    {/* Title Column */}
                    <div className={styles.signupTitleColumn}>
                        <div className={styles.signupTitle}>
                            <h2>Join Tmero<br /> Unlock a World of<br /> Language Learning for<br />Your Child!</h2>
                            <div className={styles.signupDescription}>
                            Embark on an Exciting Journey of Discovery and Communication!
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className={styles.signupFormColumn}>
                        <div className={styles.signupFormInner}>
                            <form method="post" action="get" id="signup-form">
                                <div className={styles.formGroup}>
                                    <input type="text" name="parent_full_name" placeholder="Parent Full Name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="text" name="phone_number" placeholder="Phone Number" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <select className="custom-select" required>
                                        <option value="">Select Language</option>
                                        <option value="Afaan Oromo">Afaan Oromo</option>
                                        <option value="Amharic">Amharic</option>
                                        <option value="Somali">Somali</option>
                                        <option value="Tigrigna">Tigrigna</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="text" name="state" placeholder="State" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="text" name="student_name" placeholder="Student Name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <button className={styles.signupBtn} type="submit" name="submit-form">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignupPage;
