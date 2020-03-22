import { Selector } from "testcafe";

const header = Selector("div.toolbar span");

fixture("Passing").page("http://localhost:4200");

test("Welcome page", async t => {
  await t.expect(header.textContent).eql("Welcome");
});
