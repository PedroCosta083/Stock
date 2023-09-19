import Base, { BaseProps } from "./base.entitie";

describe("Base validation", () => {
  it("Description Cannot be blank space", () => {
    const invalidBase = () =>
      new Base({
        description: " ",
      });
    expect(invalidBase).toThrowError("Description is required");
  });
  it("Description Cannot be null", () => {
    const invalidBase = () =>
      new Base({
        description: "",
      });
    expect(invalidBase).toThrowError("Description is required");
  });
  it("Description Cannot exceed 50 characters", () => {
    const invalidBase = () =>
      new Base({
        description: "9Q%%L23pf9XkV@SbaFpP4@Yg8y5etSZQcwPXi&k7Ca&9hejC8%1",
      });
    expect(invalidBase).toThrowError(
      "Description field cannot exceed 50 characters"
    );
  });
  it("Name Cannot be blank space", () => {
    const name = " ";
    const invalidBase = new Base({
      description: "Description",
    });

    expect(() => invalidBase.addName(name)).toThrowError("Name is required ");
  });
  it("Name Cannot be null", () => {
    const name = "";
    const invalidBase = new Base({
      description: "Description",
    });

    expect(() => invalidBase.addName(name)).toThrowError("Name is required ");
  });
  it("Name Cannot exceed 50 characters", () => {
    const name = "9Q%%L23pf9XkV@SbaFpP4@Yg8y5etSZQcwPXi&k7Ca&9hejC8%1";
    const invalidBase = new Base({
      description: "Description",
    });

    expect(() => invalidBase.addName(name)).toThrowError(
      "Name field cannot exceed 50 characters"
    );
  });
  it("Status cannot be true to activate", () => {
    const base = new Base({
      description: "Exemplo",
      active: false, 
    });
    expect(() => base.activate()).not.toThrow();
    expect(base.active).toBe(true);
  });
  it("Status cannot be false to deactivate", () => {
    const base = new Base({
      description: "Exemplo",
      active: true, 
    });
    expect(() => base.deactivate()).not.toThrow();
    expect(base.active).toBe(false);
  });
});
