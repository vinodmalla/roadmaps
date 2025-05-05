

export default function Homepage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Your Journey Starts Here — Master Any Skill with Clarity</h1>
        <p className="text-lg text-gray-600">
          Find curated roadmaps, top-rated courses, and trusted resources to grow faster and smarter.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <p>Explore Courses</p>
          <p variant="outline">Browse Roadmaps</p>
        </div>
      </section>

      {/* Motivation Quote */}
      <section className=" p-6 rounded-xl text-center">
        <p className="text-xl italic font-medium">
          "Every expert was once a beginner. Start where you are — grow from here."
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
        <div className="bg-white  shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold">✅ Structured Roadmaps</h3>
          <p>Step-by-step plans designed for real-world skill building.</p>
        </div>
        <div className="bg-white  shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold">🎓 Curated Courses</h3>
          <p>Handpicked free and paid resources from top platforms.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold">🚀 Project-Based Learning</h3>
          <p>Build your portfolio with real-world project suggestions.</p>
        </div>
       {/* <div className="shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold">📊 Track Your Progress</h3>
          <p>Mark steps complete and stay focused on your goals.</p>
        </div> */}
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Learn Smarter?</h2>
        <p className="text-gray-600">Start your journey today with roadmaps that make sense and resources that actually help.</p>
        <p size="lg">Get Started for Free</p>
      </section>
    </div>
  );
}
