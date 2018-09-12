const sqlite3 = require('sqlite3');
const db = new sqlite3.Database( './database.sqlite');

db.serialize(()=> {
  db.run("DROP TABLE IF EXISTS Employee");
  db.run("CREATE TABLE Employee(id INTEGER PRIMARY KEY,  name TEXT NOT NULL,  position TEXT NOT NULL,  wage INTEGER NOT NULL,  is_currently_employed INTEGER DEFAULT 1) ");

  db.run('CREATE TABLE IF NOT EXISTS `Timesheet` ( ' +
  '`id` INTEGER NOT NULL, ' +
  '`hours` INTEGER NOT NULL, ' +
  '`rate` INTEGER NOT NULL, ' +
  '`date` INTEGER NOT NULL, ' +
  '`employee_id` INTEGER NOR NULL, ' +
  'PRIMARY KEY(`id`),' +
  'FOREIGN KEY(`employee_id`) REFERENCES `Employee`(`id`))');

  db.run('CREATE TABLE IF NOT EXISTS `Menu` (' +
  '`id` INTEGER NOT NULL, '+
  '`title` INTEGER NOT NULL, '+
  'PRIMARY KEY(`id`))');

  db.run('CREATE TABLE IF NOT EXISTS `MenuItem` (' +
  '`id` INTEGER NOT NULL, ' +
  '`name` TEXT NOT NULL, ' +
  '`description` TEXT, ' +
  '`inventory` INTEGER NOT NULL, ' +
  '`price` INTEGER NOT NULL, ' +
  '`menu_id` INTEGER NOT NULL, ' +
  'PRIMARY KEY(`id`), ' +
  'FOREIGN KEY(`menu_id`) REFERENCES `Menu`(`id`))');
});
