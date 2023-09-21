/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() {email, name, password}: CreateUserDTO) {
    return { email, name, password };
  }

  @Get()
  async read() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param() params) {
    return { user: {}, params };
  }

  @Put(':id')
  async update(@Body() {email, name, password}: UpdatePutUserDTO, @Param() params) {
    return {
        method: 'PUT',
        email, name, password,
        params
    }
  }

  @Patch(':id')
  async updatePartial(@Body() {email, name, password}: UpdatePatchUserDTO, @Param () params) {
    return {
        method: 'PATCH',
        email, name, password,
        params
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return {
        id
    }
  }
     
}
