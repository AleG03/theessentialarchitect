import Link from 'next/link';

export const generateStaticParams = async () => {
  return [];
};

export default function Law1() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link href="/" className="text-gray-600 hover:text-gray-900 mb-8 inline-block">
        ← Back to home
      </Link>
      
      <article className="prose lg:prose-xl max-w-none">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-8">LAW 1.</h1>
          <div className="w-1/3 h-px bg-black mx-auto mb-8"></div>
          <h2 className="text-3xl font-normal mb-8">
            No tool can be more complicated than the action it performs
          </h2>
          <p className="text-xl text-gray-600">
            When designing and developing a system, balance the effort to implement the tool with the complexity of the action it must execute.
          </p>
        </div>

        <div className="space-y-6 text-gray-700">
          <p>
            This fundamental law of software architecture emphasizes the importance of proportionality between a tool's complexity and its purpose. When we create solutions, the effort and complexity involved in implementing them should never exceed the complexity of the problem they're meant to solve.
          </p>

          <h3 className="text-2xl font-normal mt-12 mb-6">Key Principles:</h3>
          
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Simplicity First:</strong> Always start with the simplest possible solution that could work. Complexity should only be added when clearly justified by requirements.
            </li>
            <li>
              <strong>Cost-Benefit Balance:</strong> The time and resources invested in creating a tool should be proportional to the value it provides and the complexity of the task it performs.
            </li>
            <li>
              <strong>Maintenance Consideration:</strong> Remember that complex tools require more maintenance, documentation, and training. This ongoing cost should be factored into the initial design decisions.
            </li>
          </ul>

          <h3 className="text-2xl font-normal mt-12 mb-6">Practical Application:</h3>
          
          <ul className="list-disc pl-6 space-y-4">
            <li>Before implementing a solution, assess whether the complexity of your proposed tool is justified by the problem it solves.</li>
            <li>Regularly review existing tools and systems to identify areas where simplification is possible.</li>
            <li>When faced with a complex problem, break it down into smaller, more manageable parts that can be solved with simpler tools.</li>
          </ul>
        </div>
      </article>
    </div>
  );
} 