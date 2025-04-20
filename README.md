# Assignment — CLI Application: Contact Manager

## 📖 About the Project

This is a simple CLI (Command Line Interface) application written in Node.js for managing a list of contacts. The user can list, add, get, and remove contacts using terminal commands.

---

## 🛠️ Technologies Used

- Node.js (LTS version)
- JavaScript (ES6+)
- Commander (for CLI commands)
- fs/promises (to read/write JSON data)
- path module
- JSON file as a local database

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Use the CLI to interact with the contact manager:
   ```bash
   node index.js -a <action> [options]
   ```

---

## 📂 Available Actions

| Action  | Description                      | Required Options                         |
|---------|----------------------------------|-------------------------------------------|
| list    | Display the list of contacts     | -                                         |
| get     | Get a contact by ID              | `-i` or `--id`                            |
| add     | Add a new contact                | `-n`, `-e`, `-p` (name, email, phone)     |
| remove  | Remove a contact by ID           | `-i` or `--id`                            |

---

## 🔧 Examples

```bash
# List all contacts
node index.js -a list

# Get a contact by ID
node index.js -a get -i 123

# Add a new contact
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22

# Remove a contact
node index.js -a remove -i 123
```

---

## 🖼️ Screenshots

### 📋 1. Displaying the contact list

<a href="https://ibb.co/twfsD0B3"><img src="https://i.ibb.co/twfsD0B3/list-png.png" alt="list-png" border="0"></a>

### 🔍 2. Getting a contact by ID

<a href="https://ibb.co/Rpfq7MkJ"><img src="https://i.ibb.co/Rpfq7MkJ/get-png.png" alt="get-png" border="0"></a>

### ➕ 3. Adding a new contact

<a href="https://ibb.co/NnWGSYqB"><img src="https://i.ibb.co/NnWGSYqB/add-png.png" alt="add-png" border="0"></a>

### 🗑️ 4. Removing a contact

<a href="https://ibb.co/C3718kqH"><img src="https://i.ibb.co/C3718kqH/remove-png.png" alt="remove-png" border="0"></a>
