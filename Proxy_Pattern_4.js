// 4. Proxy Pattern
// 📌 What it does:
// The Proxy Pattern creates a substitute object that controls access to the original object.

// 🔐 Real-World Analogy:
// A receptionist controls access to the boss — only certain people are allowed through.

const realAccount = {
    balance: 1000,
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}, Remaining: $${this.balance}`);
      } else {
        console.log("Insufficient balance.");
      }
    },
  };
  
  // Proxy that checks permissions
  function createAccountProxy(role) {
    return {
      withdraw(amount) {
        if (role !== "admin") {
          console.log("Access denied! 🔐");
        } else {
          realAccount.withdraw(amount);
        }
      },
    };
  }
  
  // Usage
  const user = createAccountProxy("user");
  user.withdraw(200); // Output: Access denied! 🔐
  
  const admin = createAccountProxy("admin");
  admin.withdraw(200); // Output: Withdrawn $200, Remaining: $800
  
//👉 The proxy controls who can call withdraw().