# DelApi

# Create Model
npx sequelize-cli model:generate --name tableName --attributes column:string

# Run Migrate 
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo


