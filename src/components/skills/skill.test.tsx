import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skill", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("start learning button eventually display", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container)
    // screen.debug()
    const startLearingButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 }
    );
    // screen.debug()
    expect(startLearingButton).toBeInTheDocument();
  });
});
