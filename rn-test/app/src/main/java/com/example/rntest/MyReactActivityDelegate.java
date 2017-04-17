package com.example.rntest;

import android.app.Activity;
import android.os.Bundle;

import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

/**
 * Created by kq on 2017/3/4.
 */

public class MyReactActivityDelegate extends ReactActivityDelegate {

    public MyReactActivityDelegate(Activity activity, @Nullable String mainComponentName) {
        super(activity, mainComponentName);
    }

    @Nullable
    @Override
    protected Bundle getLaunchOptions() {
        Bundle params = new Bundle();
        params.putLong("userId", 10086L);
        return params;
    }
}
