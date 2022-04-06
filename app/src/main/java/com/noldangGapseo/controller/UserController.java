package com.noldangGapseo.controller;

import java.util.List;

import com.noldangGapseo.domain.ApiResponse;
import com.noldangGapseo.domain.UserResponse;
import com.noldangGapseo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.noldangGapseo.dao.UserDao;
import com.noldangGapseo.domain.User;

@RestController
@RequestMapping("/user")
public class UserController {


  @Autowired
  UserService service;

  @GetMapping("/signup")
  public ApiResponse signUp(User user){
    ApiResponse apires =new ApiResponse();
    if(service.add(user)==1){
      return apires;
    }else{
      apires.setResCode("0000");
      apires.setResStatus("fail");
    }
    return apires;
  }

  //유저의 전체 리스트를 가져온다
  @GetMapping("/list")
  public UserResponse userlist(){
    return service.userList();
  }

//  @GetMapping("/search")
//  public User search(String nickName) {
//    return userDao.findNickname(nickName);
//  }



}
