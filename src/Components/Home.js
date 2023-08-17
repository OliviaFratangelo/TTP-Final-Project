import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>About Letters From Philosophy</h1>
            <p>The original idea for this blog came from an ethics class I took last year. Each student in the class had an assigned partner with whom we exchanged letters on the weekly class readings. In my time writing these letters, I felt supported, challenged, and heard. I believe this is the way philosophy should be learned. It doesn't always have to be formal papers and the traditional conventions of academia. This letter-writing format reminded me that philosophy is about active engagement, inclusivity, collaboration, and conversation. And if I wanted to continue having these open discussions about philosophy even beyond class, I should start them. So, welcome to my interactive philosophy journal: Letters from Philosophy.</p>
            <p><Link to={'/AllPosts'}>View Posts</Link></p> <br />
        </div>
    );
};

export default Home;