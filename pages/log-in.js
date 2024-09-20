import React from 'react';
import styles from './../public/scss/LoginPage.module.scss'; 

const LoginPage = () => {
    return (
        <div className={styles.loginPageWrapper}>
            <section className={styles.loginSectionCentered}>
                <div className={styles.loginContainer}>
                    {/* Title Column */}
                    <div className={styles.loginTitleColumn}>
                        <div className={styles.loginTitle}>
                            <h2>Welcome Back to Tmero!</h2>
                            <div className={styles.loginDescription}>
                                Log in to continue your child's exciting language learning journey!
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className={styles.loginFormColumn}>
                        <div className={styles.loginFormInner}>
                            <form method="post" action="post" id="login-form">
                                <div className={styles.formGroup}>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <button className={styles.loginBtn} type="submit" name="submit-form">Log In</button>
                                </div>
                                <div className={styles.signupRedirect}>
                                    Don’t have an account? <a href="/sign-up">Sign up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
