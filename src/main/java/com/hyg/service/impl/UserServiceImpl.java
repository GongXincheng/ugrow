package com.hyg.service.impl;

import com.hyg.entity.User;
import com.hyg.entity.UserExample;
import com.hyg.mapper.UserMapper;
import com.hyg.service.UserService;
import com.hyg.utils.MyResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserMapper userMapper;

    @Override
    public MyResult login(User user) {
        UserExample example = new UserExample();
        //添加查询条件
        example.createCriteria().andUsernameEqualTo(user.getUsername());
        //数据库查询
        List<User> userList = userMapper.selectByExample(example);
        //判断该用户名是否存在
        if(userList==null || userList.size()==0){
            return MyResult.build(201,"用户名或密码错误！");
        }
        //获取该用户名的用户信息
        User dbUser = userList.get(0);
        //判断密码是否相同
        if(!dbUser.getPassword().equals(user.getPassword())){
            return MyResult.build(201,"用户名或密码错误！");
        }
        return MyResult.build(200,"index.html",dbUser);
    }
}
