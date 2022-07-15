package com.helloworld;

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.NavigationActivity;
import org.devio.rn.splashscreen.SplashScreen; // here
import android.os.Bundle;

public class MainActivity extends NavigationActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, R.id.lottie); // here
    SplashScreen.setAnimationFinished(true); // If you want the animation dialog to be forced to close when hide is called, use this code
    super.onCreate(savedInstanceState);
    // ...other code
  }
}
