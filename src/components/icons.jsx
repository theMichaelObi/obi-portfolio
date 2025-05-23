import * as React from "react";

export const LinkedinIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        style={{
            fill: "#1a1a1a",
        }}
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H6.477v-7H9v7zM7.694 8.717c-.771 0-1.286-.514-1.286-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.371 1.2zM18 17h-2.442v-3.826c0-1.058-.651-1.302-.895-1.302s-1.058.163-1.058 1.302V17h-2.523v-7h2.523v.977c.325-.57.976-.977 2.197-.977S18 10.977 18 13.174V17z" />
    </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        style={{
            fill: "#1a1a1a",
        }}
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z" />
    </svg>
);

export const EmailIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 30 30"
        style={{
            fill: "#1a1a1a",
        }}
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="M4 5c-1.093 0-2 .907-2 2v16c0 1.093.907 2 2 2h22c1.093 0 2-.907 2-2V7c0-1.093-.907-2-2-2H4zm2.7 2h16.6L15 13.135 6.7 7zM5 9.475l10 7.39 10-7.39V23H5V9.475z" />
    </svg>
);

export const PhoneIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
            fill: "#1a1a1a",
        }}
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="M14 3.99c-5.511 0-10 4.489-10 10v22c0 5.512 4.489 10 10 10h22c5.511 0 10-4.488 10-10v-22c0-5.511-4.489-10-10-10H14zm4.006 8.043c.628.027 1.205.381 1.553.924l1.81 2.828c.73 1.141.781 2.615.129 3.805l-1.465 2.084a1.996 1.996 0 0 0-.209 1.922c.414.99 1.217 2.511 2.643 3.937a12.396 12.396 0 0 0 3.937 2.643 1.996 1.996 0 0 0 1.922-.21l2.084-1.464a3.755 3.755 0 0 1 3.805.129l2.828 1.81c.543.348.897.925.924 1.553.154 3.564-2.607 5.008-3.41 5.008-.556 0-7.24.76-14.78-6.78-7.539-7.538-6.779-14.223-6.779-14.779 0-.803 1.444-3.564 5.008-3.41z" />
    </svg>
);
