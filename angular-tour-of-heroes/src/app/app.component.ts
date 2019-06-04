import { Component } from '@angular/core';

/**
 * 스타일은 여러개 파일 지정 가능. 같은 셀렉터일 경우 마지막 css 파일의 스타일 적용
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./style.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
