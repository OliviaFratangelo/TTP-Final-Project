const { db, blogPosts, Comments } = require("./server/db");
const { green, red } = require("chalk");

const posts = [
{
    name: "Philosophy and Accessibility",
    synopsis:"Learning about philosophy may seem intimidating, but it doesn't have to be!",
    details:"(no post yet, i'll update this later)",
    createdAt: new Date(),
},
];

  const comments = [
   // firstName: "",
   // lastName: "",
   // details: "",
];

const seed = async () => {
    try {
      await db.sync({ force: true });

      await Promise.all(
        posts.map((post) => {
          return blogPosts.create(post);
        })
      );

      await Promise.all(
        comments.map((comment) => {
          return Comments.create(comment);
        })
      );
  
      console.log(green("Seeding successful!"));
      db.close();
    } catch (err) {
      console.error(red("Something went wrong!"));
      console.error(err);
      db.close();
    }
  };

  
  seed();
  