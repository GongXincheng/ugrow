package com.hyg.service;

import com.hyg.entity.User;
import com.hyg.utils.MyResult;

public interface UserService {
    MyResult login(User user);
}
