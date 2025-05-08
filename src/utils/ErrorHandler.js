import { Sequelize } from "sequelize";

export const errorHandler = (error) => {
    let errorMessage;

    if (error instanceof Sequelize.ValidationError) {
        errorMessage = error.errors.map(err => err.message).join(', ');
    } else if (error instanceof Sequelize.UniqueConstraintError) {
        errorMessage = "A record with the same unique field already exists.";
    } else if (error instanceof Sequelize.ForeignKeyConstraintError) {
        errorMessage = "A foreign key constraint violation occurred: " + error.message;
    } else if (error instanceof Sequelize.TimeoutError) {
        errorMessage = "The request timed out: " + error.message;
    } else if (error instanceof Sequelize.DatabaseError) {
        errorMessage = "A database error occurred: " + error.message;
    } else {
        errorMessage = error.message;
    }
    return errorMessage;
};