// 📌 What it does:
// The Adapter Pattern allows incompatible objects or APIs to work together by converting one interface into another.

// 🧰 Real-World Analogy:
// Think of a charger adapter that allows a U.S. plug to fit in a European socket.
// Old system

class OldPrinter {
    printOld(message) {
      console.log("Old print: " + message);
    }
  }
  
  // Adapter
  class NewPrinterAdapter {
    constructor() {
      this.oldPrinter = new OldPrinter();
    }
  
    print(message) {
      this.oldPrinter.printOld(message); // Convert new to old
    }
  }
  
  // Usage
  const printer = new NewPrinterAdapter();
  printer.print("Hello from the adapter!"); // Output: Old print: Hello from the adapter!
  