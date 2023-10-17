import { randomUUID } from "crypto";
import BaseInterface from "./base.interface";
import { stringNotNullAndBlankSpace } from "../../util/regex/regex";

export type BaseProps = {
  id?: string;
  name?: string;
  description: string;
  createAt?: Date;
  updateAt?: Date;
  deactivateAt?: Date;
};

export default class Base implements BaseInterface {
  private _id: string;
  private _name: string;
  private _description: string;
  private _active: boolean;
  private _createAt: Date;
  private _updateAt: Date;
  private _deactivateAt: Date;

  constructor(props: BaseProps) {
    this._id = props.id || randomUUID();
    this._name = props.name || "";
    this._description = props.description;
    this._active = true ;
    this._createAt = props.createAt || new Date();
    this._updateAt = props.updateAt || new Date();
    this._deactivateAt = props.deactivateAt || new Date();
    this.validate();
  }

  addName(name: string): void {
    if (stringNotNullAndBlankSpace.test(name) === false) {
      throw new Error("Name is required ");
    }
    if (name.length > 50) {
      throw new Error("Name field cannot exceed 50 characters");
    }
    this._name = name;
  }
  removeName(): void {
    this._name = "";
  }

  activate(): void {
    if (this._active === true) {
      throw new Error("Status there is already activated");
    }
    this._active = true;
    this._updateAt = new Date();
  }
  deactivate(): void {
    if (this._active === false) {
      throw new Error("Status there is already deactivated");
    }
    this._active = false;
    this._deactivateAt = new Date();
  }

  validate(): void {
    if (stringNotNullAndBlankSpace.test(this._id) === false) {
      throw new Error("Id is required");
    }
    if (stringNotNullAndBlankSpace.test(this._description) === false) {
      throw new Error("Description is required");
    }
    if (this._description.length > 50) {
      throw new Error("Description field cannot exceed 50 characters");
    }
    if (!(this._createAt instanceof Date) || this._createAt === null) {
      throw new Error(
        "Creation Date cannot be null and must be an instance of Date"
      );
    }
    if (!(this._updateAt instanceof Date) || this._updateAt === null) {
      throw new Error(
        "Update Date cannot be null and must be an instance of Date"
      );
    }
    if (!(this._deactivateAt instanceof Date) || this._deactivateAt === null) {
      throw new Error(
        "Deactivate Date cannot be null and must be an instance of Date"
      );
    }
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get description(): string {
    return this._description;
  }
  get active(): boolean {
    return this._active;
  }
  get createAT(): Date {
    return this._createAt;
  }
  get updateAT(): Date {
    return this._updateAt;
  }
  get deactivateAT(): Date {
    return this._deactivateAt;
  }
}
