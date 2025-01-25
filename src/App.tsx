import React, { useState, useEffect } from 'react';
import { SakuraParticles } from './components/SakuraParticles';
import { ThemeToggle } from './components/ThemeToggle';
import { Dashboard } from './components/Dashboard';
import { ConceptGrid } from './components/ConceptGrid';
import { CodeViewer } from './components/CodeViewer';
import { CppFile, UserProgress } from './types';
import { Code2 } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [files, setFiles] = useState<CppFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<CppFile | null>(null);
  const [progress] = useState<UserProgress>({
    totalHours: 25,
    completedConcepts: 25,
    totalConcepts: 400
  });

  useEffect(() => {
    // Load files from the cpp-scripts directory inside the public folder
    setFiles([
      {
        name: 'Abstraction',
        path: '/cpp-scripts/Abstraction.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Intermediate',
        category: 'OOP',
      },
      {
        name: 'Algorithm Library',
        path: '/cpp-scripts/AlgorithmLibrary.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Advanced',
        category: 'Algorithms',
      },
      {
        name: 'Binary Search Tree',
        path: '/cpp-scripts/BinarySearchTree.cpp',
        content: '',
        timeSpent: 2,
        difficulty: 'Intermediate',
        category: 'Data Structures',
      },
      {
        name: 'Classes and Objects',
        path: '/cpp-scripts/ClassesAndObjects.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'OOP',
      },
      {
        name: 'Concurrency',
        path: '/cpp-scripts/Concurrency.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Advanced',
        category: 'Concurrency',
      },
      {
        name: 'Constructors and Destructors',
        path: '/cpp-scripts/ConstructorsAndDestructors.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'OOP',
      },
      {
        name: 'Dynamic Memory Allocation',
        path: '/cpp-scripts/DynamicMemoryAllocation.cpp',
        content: '',
        timeSpent: 2,
        difficulty: 'Intermediate',
        category: 'Memory Management',
      },
      {
        name: 'Encapsulation',
        path: '/cpp-scripts/Encapsulation.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'OOP',
      },
      {
        name: 'Exception Handling',
        path: '/cpp-scripts/ExceptionHandling.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Intermediate',
        category: 'Error Handling',
      },
      {
        name: 'File Handling',
        path: '/cpp-scripts/FileHandling.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Intermediate',
        category: 'File I/O',
      },
      {
        name: 'Friend Functions',
        path: '/cpp-scripts/FriendFunctions.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Intermediate',
        category: 'OOP',
      },
      {
        name: 'Function Overloading',
        path: '/cpp-scripts/FunctionOverloading.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'Functions',
      },
      {
        name: 'Function Pointers',
        path: '/cpp-scripts/FunctionPointers.cpp',
        content: '',
        timeSpent: 2,
        difficulty: 'Advanced',
        category: 'Functions',
      },
      {
        name: 'Graph Theory',
        path: '/cpp-scripts/GraphTheory.cpp',
        content: '',
        timeSpent: 2,
        difficulty: 'Advanced',
        category: 'Algorithms',
      },
      {
        name: 'Heap',
        path: '/cpp-scripts/Heap.cpp',
        content: '',
        timeSpent: 2,
        difficulty: 'Intermediate',
        category: 'Data Structures',
      },
      {
        name: 'Hello',
        path: '/cpp-scripts/Hello.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'Basics',
      },
      {
        name: 'Inheritance',
        path: '/cpp-scripts/Inheritance.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'OOP',
      },
      {
        name: 'Iterator',
        path: '/cpp-scripts/Iterator.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Intermediate',
        category: 'Data Structures',
      },
      {
        name: 'Lambda Functions',
        path: '/cpp-scripts/LambdaFunctions.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Intermediate',
        category: 'Functions',
      },
      {
        name: 'Linked List',
        path: '/cpp-scripts/LinkedList.cpp',
        content: '',
        timeSpent: 2,
        difficulty: 'Intermediate',
        category: 'Data Structures',
      },
      {
        name: 'List',
        path: '/cpp-scripts/List.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'Data Structures',
      },
      {
        name: 'Map',
        path: '/cpp-scripts/Map.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Intermediate',
        category: 'Data Structures',
      },
      {
        name: 'Array',
        path: '/cpp-scripts/array.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'Data Structures',
      },
      {
        name: 'Condition',
        path: '/cpp-scripts/condition.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'Control Flow',
      },
      {
        name: 'Functions',
        path: '/cpp-scripts/functions.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'Functions',
      },
      {
        name: 'Loop',
        path: '/cpp-scripts/loop.cpp',
        content: '',
        timeSpent: 1,
        difficulty: 'Beginner',
        category: 'Control Flow',
      }
    ]);
  }, []);

  const handleFileSelect = async (file: CppFile) => {
    console.log('Selected file:', file);

    try {
      const response = await fetch(file.path);
      if (!response.ok) {
        throw new Error('File not found');
      }
      const fileContent = await response.text();
      setSelectedFile({
        ...file,
        content: fileContent, // Store file content
      });
    } catch (error) {
      console.error('Error loading file content:', error);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-slate-900' : 'bg-gray-50'}`}>
      <SakuraParticles />
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

      <div className="container mx-auto px-4 py-8 relative z-20">
        {selectedFile ? (
          <CodeViewer
            file={selectedFile}
            isDark={isDark}
            onBack={() => setSelectedFile(null)}
          />
        ) : (
          <>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Code2 className="w-12 h-12 text-pink-500" />
              </div>
              <h1 className="text-4xl font-bold mb-4 dark:text-white">
                C++ Learning Journey
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Embark on a journey through C++ concepts, with carefully crafted examples
                and interactive challenges. Track your progress and master one concept at a time.
              </p>
            </div>

            <Dashboard progress={progress} />
            <ConceptGrid
              files={files}
              onFileSelect={handleFileSelect}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
