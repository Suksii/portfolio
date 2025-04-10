import React from "react";

const MyStory = () => {
  const getYears = (birthdayDate) => {
    const birthday = new Date(birthdayDate);
    const today = new Date();

    let years = today.getFullYear() - birthday.getFullYear();

    const hasBirthdayPassedThisYear =
      today.getMonth() > birthday.getMonth() ||
      (today.getMonth === birthday.getMonth() &&
        today.getDate() >= birthday.getDate());

    if (!hasBirthdayPassedThisYear) years--;
    return years;
  };
  const years = getYears("1996-07-27");

  return (
    <>
      <p className="uppercase font-semibold pb-10">My story</p>
      <p className="text-center md:text-start leading-8 text-lg">
        Hello, my name is Šućo and I am {years} years old.
        <br />
        I graduated from the Faculty of Electrical Engineering in Podgorica,
        University of Montenegro, but even before that I was interested in
        programming. Everything started with the C language, which I learned in
        second year in faculty, and I was crazy about solving logical problems
        in C.
        <br />
        After graduation, I started learning web development and I fell in love
        with it.
      </p>
      <p className="text-center md:text-start leading-8 text-lg pt-5">
        I am a self-taught developer and I am constantly learning new things. I
        am currently working as a freelance web developer and I am looking for a
        job as a mid-level web developer. I always strive to improve my skills
        and I am always ready to learn new technologies. I am a very responsible
        person and I always try to do my best in every project I work on.
      </p>
    </>
  );
};

export default MyStory;
