import { connect } from "mongoose";
export async function run(): Promise<void> {
  try {
    await connect(
      "mongodb+srv://node_user:pBYi9t$bOcal2^C@cluster0.ayyll.mongodb.net/test?retryWrites=true&w=majority"
    );
    console.log("db success");
  } catch (e) {
    console.log("error");
  }
}