import promptSync from "prompt-sync";
import { createObjectCsvWriter } from "csv-writer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";

const prompt = promptSync({ sigint: true });

const csvWriter = createObjectCsvWriter({
  path: "./contacts.csv",
  append: true,
  header: [
    { id: "name", title: "NAME" },
    { id: "number", title: "NUMBER" },
    { id: "email", title: "EMAIL" },
    { id: "createdAt", title: "CREATED_AT" },
  ],
});

const isvalidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^\d{10,15}$/.test(phone);

const getValidInput = (
  question: string,
  validator?: (str: string) => boolean
): string => {
  while (true) {
    const input = prompt(chalk.cyan(question));

    if (!input.trim()) {
      console.log(chalk.yellow("⚠️  Input cannot be empty."));
      continue;
    }

    if (validator && !validator(input)) {
      console.log(chalk.red("❌ Invalid format. Please try again."));
      continue;
    }

    return input;
  }
};

interface PersonType {
  name: string;
  number: string;
  email: string;
  createdAt: string;
}

class Person implements PersonType {
  name: string;
  number: string;
  email: string;
  createdAt: string;

  constructor(name: string, number: string, email: string) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.createdAt = new Date().toISOString();
  }

  async saveToCSV() {
    const spinner = ora("Saving contact to database...").start();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const records = [
      {
        name: this.name,
        number: this.number,
        email: this.email,
        createdAt: this.createdAt,
      },
    ];

    try {
      await csvWriter.writeRecords(records);
      spinner.succeed(
        chalk.green(`Contact ${chalk.bold(this.name)} saved successfully!`)
      );
    } catch (err) {
      spinner.fail(chalk.red("Failed to save contact."));
      console.error(err);
    }
  }
}

const startApp = async () => {
  console.clear();

  console.log(
    chalk.magenta(figlet.textSync("Contact CSV", { horizontalLayout: "full" }))
  );
  console.log(chalk.dim("1.0 - Built with Node.js & TypeScript\n"));

  let shouldContinue = true;

  while (shouldContinue) {
    const name = getValidInput("👤 Contact Name: ");
    const number = getValidInput("📱 Contact Number: ", isValidPhone);
    const email = getValidInput("📧 Contact Email: ", isvalidEmail);

    const person = new Person(name, number, email);
    await person.saveToCSV();

    console.log("");
    const response = prompt(chalk.cyan("🔄 Add another? [y/n]: "));
    shouldContinue = response.trim().toLowerCase() === "y";
  }

  console.log(chalk.magenta("\nGoodbye! See you next time. 👋"));
};

startApp();
