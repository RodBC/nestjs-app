[fix] changing migration.

notes: schema:drop should be used to clean db storage;

 npm run build should be used to transpile every changed code from ts to js;

 npm run migration:run to change the migrations in the db ( ! IMPORTANT !) --> we can change the file inside the database (the migrations file) manually if we got to update specific, small and precise parts of the code recently adapted;

in ApiProperties we can specify nullable value to swagger by adding this property in the tag, unlike just adding the ? to entity, dto and service(here we can destructure the values and pass it as an object) 

