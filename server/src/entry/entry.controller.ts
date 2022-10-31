import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EntryService } from "./entry.service";
import { EntryControllerBase } from "./base/entry.controller.base";

@swagger.ApiTags("entries")
@common.Controller("entries")
export class EntryController extends EntryControllerBase {
  constructor(
    protected readonly service: EntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
