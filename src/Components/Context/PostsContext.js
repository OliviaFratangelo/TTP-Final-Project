import React, { createContext, useContext, useState, useEffect } from "react";

const PostsContext = createContext();

export function PostsProvider({ children }) {
    const currentPosts = [
        {
            id: 1,
            title: "Accessibility and Philosophy",
            synopsis: "Philosophy is discovered naturally from a young age, so why is there a lack of exposure to philosophy in mainstream education?",
            details: 'I did not take a formal philosophy class or read any philosophy related literature until college. And even then, I had preconceived notions about philosophy like that it was boring, complicated, and inaccessible. I always thought I would not understand it and I needed a formal class to teach me how to even approach philosophy. However, I did not realize that I had discovered philosophy in various forms at many points throughout my life and there were many ways to foster these natural philosophical discoveries beyond just the classroom. I especially reflected on this as I was reading Nasty, Brutish, and Short: Adventures in Philosophy with My Kids by Scott Hershovitz where he discusses philosophy through the lens of his two young sons. The two children started raising philosophical questions, echoing sentiments of age-long debates, and even bringing up new points. If “every kid is a philosopher” like Hershovitz says, why is philosophy not integrated into school curricula from earlier on in education? Children today are growing up in a world that needs philosophy possibly more than ever. With all of the uncharted territory with rapidly advancing technology that we are uncovering, why wait to expose young students to ethical theories that they can then expand on to make our world a better place? Another point I would like to make in this discussion of philosophy and accessibility is that I am not a purist when it comes to philosophy and I will always advocate for more digestible forms of philosophical content. I don’t believe that someone needs to learn Ancient Greek to truly understand and accurately learn about Plato. I don’t even think you necessarily need to read full translations of Plato’s work. If you feel comfortable doing so and would like to, that’s all good and well, but I also truly do appreciate videos, presentations, and all other forms of media that interpret these works and make them more accessible to everyone. You shouldn’t need a philosophy degree or any higher education at all to learn about concepts that we are already so naturally curious about. Anyway, I would like to hear your thoughts on this topic, as well as all the other topics I will be posting about soon. Please let me know what you think in the comments!',
        },
        {
        
            id: 2,
            title: "Plato's Cave",
            synopsis: "It's difficult to decide where to start when talking about philosophy, but I always start with Plato's cave allegory",
            details: "I had to read Platos Allegory of the Cave and write about it for the same letter writing assignment that inspired this blog. While I was writing the letter, my roommate asked me what I was working on. I told her about the reading and she said she had read it before. She said this particular book of Platos Republic was really her first introduction to philosophy and was part of her set English curriculum in high school. I suppose it does make sense though to start with this since at that age and possibly even earlier, students are inevitably wondering, why do we learn philosophy? In fact, why do we learn anything? Of course there are many ways to interpret this story and to interpret the truth that the metaphorical people in the cave discover by the end, but I believe that this is an allegory about escaping ignorance and gaining knowledge. It is about replacing belief with truth. Therefore, I understand why it is particularly important for young students to read and interpret. The basic premise of this story is that there are prisoners who are stuck in a cave and they can not see real objects, but just shadows of objects projected on a wall in front of them. They believe they are fully living and experiencing things, but really they are just stagnant, watching shadows travel across the wall. Finally, a prisoner escapes and discovers the actual object and discovers the source of all things-light, or the sun-and understands that is how they were seeing the reflections of images. However, when he goes to enlighten the other prisoners, they want no part in this and do not care to learn the truth because that would require them to unlearn all they know, and that can be daunting, of course. The person Socrates is telling this story to in the text remarks that the prisoners are strange and the entire image Socrates creates is strange, to which Socrates replies that the prisoners are like us and makes the point that it is not so crazy or unthinkable to believe that they truly did believe the shadows cast by the fire were all there was to reality as they sat there motionless. This made me reflect on how many things I have believed in my life simply because it was all I knew and perhaps things that I still believe that could be proven false by a simple change in perspective. Can you think of any situations in your life that relate to this? How do you interpret this story?",
        },
        {
        
            id: 3,
            title: "Self Driving Cars: A Modern Trolley Problem?",
            synopsis: "Applying the classic trolley problem to a current dilemma of engineers and technology ethicists",
            details: "Coming soon!",
        },
    ];

    const [allPosts, setAllPosts] = useState(currentPosts);
    
    useEffect(() => {
            const savedPosts = JSON.parse(localStorage.getItem("allPosts") || "[]");
            setAllPosts(savedPosts);
        }, []);

    useEffect(() => {
        localStorage.setItem("allPosts", JSON.stringify(allPosts));
    }, [allPosts]);

        const contextValue = {
            allPosts,
            setAllPosts,
        };

        return (
            <PostsContext.Provider value={contextValue}>
                {children}
            </PostsContext.Provider>
        );
    }

    export function usePostsContext() {
        return useContext(PostsContext);
    }